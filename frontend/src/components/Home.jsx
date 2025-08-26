import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-4">
      <div className="text-center max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">UserManager</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Manage your team accounts securely and easily.
        </p>

        <div className="flex flex-col gap-4">
          <a href="/login">
            <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition cursor-pointer">
              Login
            </button>
          </a>
          <a href="/register">
            <button className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition cursor-pointer">
              Register
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

