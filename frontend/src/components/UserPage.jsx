import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"; // You need to install @heroicons/react


const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`http://localhost:5000/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setUser(data);
        } else {
          setError(data.error || "Failed to fetch user");
        }
      } catch (err) {
        setError("Server error, try again later.");
      }
    };

    fetchUser();
  }, [id]);

  if (error)
    return (
      <div
      className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
      role="alert"
    >
      <ExclamationCircleIcon className="w-6 h-6 mr-2 flex-shrink-0" />
      <span className="font-medium">{error}</span>
    </div>
    );
  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back,{" "}
              <span className="text-blue-600">{user.fullname}</span>! 🎉
            </h1>
            <p className="text-gray-600 text-lg">
              You have successfully logged in to your UserManager account
            </p>
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-800 font-semibold">
                ✅ Login successful! Welcome to your dashboard.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Your Account Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Full Name
                </label>
                <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50">
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
                  <span className="text-gray-800">{user.fullname}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email Address
                </label>
                <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50">
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
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  <span className="text-gray-800">{user.email}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  User ID
                </label>
                <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50">
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
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="text-gray-800 font-mono">#{user.id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
