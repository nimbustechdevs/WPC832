
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function OTPForm() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await verifyOTP(otp);
      setIsVerified(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (isVerified) {
    return (
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow text-center">
        <div className="text-green-500 text-2xl mb-4">✓</div>
        <h2 className="text-xl font-bold text-gray-700">OTP Verified Successfully!</h2>
        <p className="text-gray-600">Redirecting to dashboard...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-center text-[#77BEF0]">
        Verify Your Email
      </h2>
      <p className="text-gray-600 text-center">
        We've sent a 6-digit code to your email
      </p>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600 mb-1">Enter OTP</label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]{6}"
            maxLength={6}
            placeholder="123456"
            value={otp}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setOtp(value);
            }}
            className="text-gray-500 w-full p-3 rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none text-center text-xl tracking-widest"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#77BEF0] text-white p-3 rounded-lg font-semibold hover:bg-[#459cda] transition flex justify-center items-center"
          disabled={loading || otp.length !== 6}
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Verify OTP"
          )}
        </button>
      </form>

      <p className="text-center text-gray-500 text-sm">
        Didn't receive code?{" "}
        <button className="text-[#1797f3] hover:underline font-semibold">
          Resend
        </button>
      </p>
    </div>
  );
}