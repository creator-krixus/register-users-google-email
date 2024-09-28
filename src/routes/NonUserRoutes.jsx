import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import CreateUser from "../pages/CreateUser"
import Login from "../pages/Login"
import NavBar from "../components/NavBar"

export default function NonUserRoutes() {
  return (
    <div>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="create-user" element={<CreateUser />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes>
      </NavBar>
    </div>
  )
}
