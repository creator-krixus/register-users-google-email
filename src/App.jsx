import { UserAuth } from "./context/AuthContext"
import NonUserRoutes from "./routes/NonUserRoutes"
import UserRoutes from "./routes/UserRoutes"
// import Footer from "./components/Footer/Footer"
import './App.scss'

function App() {
  const { isLoggedOut } = UserAuth()
  return (
    <div className="app">
      {isLoggedOut ? <NonUserRoutes /> : <UserRoutes />}
      {/* <Footer /> */}
    </div>
  )
}

export default App
