import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("adminToken");
                const res = await fetch("http://localhost:5000/admin/users", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await res.json();
                if (res.ok) {
                    setUsers(data);
                } else {
                    setError(data.error || "Failed to fetch users");
                }
            } catch (err) {
                setError("Server error, try again later.");
            }
        };

        fetchUsers();
    }, []);

    console.log(users);
    

    if (error) return <p className="text-red-500">{error}</p>;
    if (users.length === 0) return <p>No users found.</p>;

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Admin Dashboard
                </h2>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left">#</th>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Email</th>
                                <th className="px-4 py-3 text-left">Role</th>
                                <th className="px-4 py-3 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3">{user.id}</td>
                                    <td className="px-4 py-3">{user.fullname}</td>
                                    <td className="px-4 py-3">{user.email}</td>
                                    <td className="px-4 py-3">{user.role}</td>
                                    <td className="px-4 py-3">
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="px-3 py-1 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
