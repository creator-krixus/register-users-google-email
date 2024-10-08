import { UserAuth } from "../../context/AuthContext"
import { logout } from "../../functions/auth";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const { user } = UserAuth();
  const navigate = useNavigate();

  const handlerLogout = async () => {
    await logout()
    navigate("/");
  }
  const getFirstName = () => {
    // Si el usuario se autentica con Google, usar displayName
    if (user?.displayName) {
      return user.displayName.split(" ")[0];
    }
    return user?.firstName || "User";
  };
  return (
    <>
      <img src={user?.photoURL}></img>
      <div>Welcome {getFirstName()}</div>
      <button onClick={handlerLogout}>logout</button>
    </>
  )
}
