"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiCheckCircle, FiEye, FiEyeOff } from "react-icons/fi";

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setPasswordMatch(
      form.password && form.confirmPassword && form.password === form.confirmPassword
    );
  }, [form.password, form.confirmPassword]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors({ server: data.message || "Registration failed" });
      } else {
        router.push("/otp");
      }
    } catch (error) {
      setErrors({ server: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-center text-[#77BEF0]">
        Create your account
      </h2>
      
      {errors.server && (
        <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
          {errors.server}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className={`text-gray-500 w-full p-3 rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none ${
                errors.firstName ? "border border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className={`text-gray-500 w-full p-3 rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none ${
                errors.lastName ? "border border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className={`text-gray-500 w-full p-3 rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none ${
              errors.email ? "border border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="relative">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create your password"
            value={form.password}
            onChange={handleChange}
            className={`text-gray-500 w-full p-3 rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none ${
              errors.password ? "border border-red-500" : ""
            }`}
          />
          <button
            type="button"
            className="absolute right-3 bottom-3 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {/* {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />} */}
          </button>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <div className="relative">
          <label className="block text-gray-600 mb-1">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChange={handleChange}
            className={`text-gray-500 w-full p-3 rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none ${
              errors.confirmPassword ? "border border-red-500" : ""
            }`}
          />
          <div className="absolute right-3 bottom-3 flex items-center space-x-2">
            {passwordMatch && (
              <FiCheckCircle className="text-green-500 text-xl" />
            )}
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {/* {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />} */}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#77BEF0] text-white p-3 rounded-lg font-semibold hover:bg-[#459cda] transition flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Create Account"
          )}
        </button>
      </form>

      <p className="text-center text-gray-500 text-sm mt-4">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#1797f3] hover:underline font-semibold"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}