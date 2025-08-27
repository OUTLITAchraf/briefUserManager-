import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormRegister() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!fullname) newErrors.fullname = "Full name is required";

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setFullname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors({});
        setSuccess("✅ Registration successful! You can now log in.");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setSuccess("");
        setErrors({ server: data.error || "Registration failed" });
      }
    } catch (error) {
      console.error(error);
      setSuccess("");
      setErrors({ server: "Something went wrong. Try again later." });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create your <span className="text-blue-600">UserManager</span> account
        </h2>
        <form
          onSubmit={handleRegister}
          className="space-y-5">
          {errors.server && (
            <div className="bg-red-500 text-sm text-white p-3 my-3 font-semibold text-center"> {errors.server}</div>
          )}
          {success && (
            <div className="bg-green-500 text-sm text-white p-3 my-3 font-semibold text-center"> {success}</div>
          )}
          <div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <div className="flex items-center border rounded-xl px-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600 mr-2"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                  placeholder="John Doe"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
            </div>
            {errors.fullname && (
              <div className="text-sm text-red-500 my-3">{errors.fullname}</div>
            )}
          </div>

          <div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <div className="flex items-center border rounded-xl px-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail-icon lucide-mail text-gray-600 mr-2"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="exemple@gmail.com"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
            </div>
            {errors.email && (
              <div className="text-sm text-red-500 my-3">{errors.email}</div>
            )}
          </div>

          <div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <div className="flex items-center border rounded-xl px-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lock-keyhole-icon lucide-lock-keyhole text-gray-600 mr-2"
                >
                  <circle cx="12" cy="16" r="1" />
                  <rect x="3" y="10" width="18" height="12" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                </svg>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="••••••••"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
            </div>
            {errors.password && (
              <div className="text-sm text-red-500 my-3">{errors.password}</div>
            )}
          </div>

          <div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <div className="flex items-center border rounded-xl px-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lock-keyhole-icon lucide-lock-keyhole text-gray-600 mr-2"
                >
                  <circle cx="12" cy="16" r="1" />
                  <rect x="3" y="10" width="18" height="12" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                </svg>
                <input
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  placeholder="••••••••"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
            </div>
            {errors.confirmPassword && (
              <div className="text-sm text-red-500 my-3">{errors.confirmPassword}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
