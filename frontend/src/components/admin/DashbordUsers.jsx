import React from 'react'

function DashbordUsers() {
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com"},
        { id: 2, name: "Jane Smith", email: "jane@example.com"},
        { id: 3, name: "Michael Brown", email: "michael@example.com"},
    ];

    // Temporary delete function (later connect to backend)
    const handleDelete = (id) => {
        alert(`Delete user with ID: ${id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    User Dashboard
                </h2>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Email</th>
                                <th className="px-4 py-3 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3">{user.name}</td>
                                    <td className="px-4 py-3">{user.email}</td>
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
}

export default DashbordUsers
