import React from 'react';
import { Link } from 'react-router-dom';

const VerifyOTP = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          OTP Verification Disabled
        </h1>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go To Login
        </Link>
      </div>
    </div>
  );
};

export default VerifyOTP;