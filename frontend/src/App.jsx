import AdminDashbord from "./components/admin/AdminDashbord"
import AdminLogin from "./components/admin/AdminLogin"
import FormLogin from "./components/formLogin"
import FormRegister from "./components/formRegister"
import Home from "./components/Home"
import UserPage from "./components/UserPage"
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<FormLogin/>}/>
          <Route path="/register" element={<FormRegister/>}/>
          <Route path="/user_profile/:id" element={<UserPage/>}/>
          <Route path="/admin/login" element={<AdminLogin/>}/>
          <Route path="/admin/admin_dashboard" element={<AdminDashbord/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
