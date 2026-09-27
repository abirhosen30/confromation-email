"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LoadingState from "@/components/Loading";
import ConfromationCard from "@/components/ConfromationCard";
import ErrorState from "@/components/ErrorState";

type Status = "loading" | "success" | "error";

export default function ConfirmEmailPage() {
  return (
    <Suspense fallback={<CenteredLoading />}>
      <ConfirmEmailContent />
    </Suspense>
  );
}

function CenteredLoading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <LoadingState />
    </main>
  );
}

function ConfirmEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  const email = searchParams.get("email") ?? undefined;

  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [resending, setResending] = useState(false);

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setErrorMessage("কোনো ভেরিফিকেশন টোকেন পাওয়া যায়নি।");
      return;
    }
    
    fetch(`/api/confrom-email?token=${encodeURIComponent(token)}`)
      .then(async (res) => {
        if (!res.ok) throw new Error();
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
        setErrorMessage("লিংকটি মেয়াদোত্তীর্ণ অথবা সঠিক নয়।");
      });
  }, [token]);

  const handleContinue = () => {
    router.push("/dashboard");
  };

  const handleResend = async () => {
    setResending(true);
    try {
      await fetch("/api/resend-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } finally {
      setResending(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {status === "loading" && <LoadingState />}
      {status === "success" && (
        <ConfromationCard email={email} onContinue={handleContinue} />
      )}
      {status === "error" && (
        <ErrorState
          message={errorMessage}
          onResend={handleResend}
          resending={resending}
        />
      )}
    </main>
  );
}