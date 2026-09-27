import React from 'react';

const LoadingState = () => {
   return (
    <div className="bg-white rounded-2xl shadow-lg px-8 py-10 max-w-md w-full text-center">
      <div className="w-14 h-14 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto" />
      <p className="text-gray-500 mt-6">আপনার ইমেইল ভেরিফাই করা হচ্ছে...</p>
    </div>
  );
};

export default LoadingState;