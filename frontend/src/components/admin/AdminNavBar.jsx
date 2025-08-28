import { useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    
    // Redirect to admin login page
    navigate("/admin/login");
  };

  return (
    <nav className="px-10 py-4 bg-gray-100 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
}

export default AdminNavbar;
