import React from 'react';

import ErrorIcon from "./ErrorIcon";

interface ErrorStateProps {
  message?: string;
  onResend: () => void;
  resending?: boolean;
}

const ErrorState = ({ message, onResend, resending }: ErrorStateProps) => {
   return (
    <div className="bg-white rounded-2xl shadow-lg px-8 py-10 max-w-md w-full text-center">
      <ErrorIcon />

      <h1 className="text-2xl font-bold text-gray-900 mt-6">
        ভেরিফিকেশন ব্যর্থ হয়েছে
      </h1>

      <p className="text-gray-500 mt-3">
        {message ?? "লিংকটি মেয়াদোত্তীর্ণ অথবা সঠিক নয়। আবার চেষ্টা করুন।"}
      </p>

      <button
        onClick={onResend}
        disabled={resending}
        className="mt-8 w-full bg-gray-900 hover:bg-gray-800 disabled:opacity-60 text-white font-medium py-3 rounded-lg transition-colors"
      >
        {resending ? "পাঠানো হচ্ছে..." : "নতুন লিংক পাঠান"}
      </button>

      <p className="text-sm text-gray-400 mt-6">
        সমস্যা হলে{" "}
        <a href="/contact" className="text-blue-600 hover:underline">
          Support
        </a>{" "}
        এ যোগাযোগ করুন
      </p>
    </div>
  );
};

export default ErrorState;