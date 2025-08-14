
"use client";
import { useState } from "react";

export default function SignupPage() {
	const [form, setForm] = useState({ name: "", email: "", password: "" });
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// TODO: Connect to backend API
		setMessage("Signup successful! (Demo only)");
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 corner-rounded">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
				<h2 className="text-2xl font-bold text-center text-[#77BEF0]">Register here</h2>
				<form className="space-y-4" onSubmit={handleSubmit}>
					<div>
						<label className="block text-gray-600 mb-1">Username</label>
						<input
							type="text"
							name="name"
							placeholder="Create your username"
							value={form.name}
							onChange={handleChange}
							required
							 className="text-gray-500 w-full p-3  rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none pr-10"
						/>
					</div>
					<div>
						<label className="block text-gray-600 mb-1">Email</label>
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							value={form.email}
							onChange={handleChange}
							required
							 className="text-gray-500 w-full p-3  rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none pr-10"
						/>
					</div>
					<div>
						<label className="block text-gray-600 mb-1">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Create your password"
							value={form.password}
							onChange={handleChange}
							required
							 className="text-gray-500 w-full p-3  rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none pr-10"
						/>
					</div>
					<div>
						<label className="block text-gray-600 mb-1"> Confirm Password</label>
						<input
						   type= "password"
						   name= "confirmPassword"
						   placeholder="Confirm your password"
						   value={form.confirmPassword}
						   onChange={handleChange}
						   required
						   className="text-gray-500 w-full p-3 rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none pr-10"
						   />
					</div>
					<button
						type="submit"
						className="w-full bg-[#77BEF0] text-white p-3 rounded-lg font-semibold hover:bg-[#459cda] transition"
					>
					Submit
					</button>
				</form>
				{message && <p className="mt-4 text-green-600 text-center">{message}</p>}
			</div>
		</div>
	);
}
