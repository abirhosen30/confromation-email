import React from 'react';
import SuccessIcon from './SuccessIcon';

interface ConfirmationCardProps {
  email?: string;
  onContinue: () => void;
}

const ConfromationCard = ({ email, onContinue }: ConfirmationCardProps) => {
   return (
    <div className="bg-white rounded-2xl shadow-lg px-8 py-10 max-w-md w-full text-center">
      <SuccessIcon />

      <h1 className="text-2xl font-bold text-gray-900 mt-6">
        ইমেইল কনফার্ম হয়ে গেছে!
      </h1>

      <p className="text-gray-500 mt-3">
        {email ? (
          <>
            আপনার ইমেইল <span className="font-medium text-gray-700">{email}</span>{" "}
            সফলভাবে ভেরিফাই করা হয়েছে।
          </>
        ) : (
          "আপনার ইমেইল সফলভাবে ভেরিফাই করা হয়েছে।"
        )}
      </p>

      <button
        onClick={onContinue}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Continue
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

export default ConfromationCard;