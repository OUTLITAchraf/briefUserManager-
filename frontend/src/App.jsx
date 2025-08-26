import FormLogin from "./components/formLogin"
import FormRegister from "./components/formRegister"
import Home from "./components/Home"
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<FormLogin/>}/>
          <Route path="/register" element={<FormRegister/>}/>
        </Routes>
      </Router>
      <formLogin/>
      <formRegister/>
    </>
  )
}

export default App
