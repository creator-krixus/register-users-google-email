import { useState, useEffect } from "react";
import { signUp, signInWithGoogle } from "../../functions/auth";
import google from "../../assets/google.png"
import house from "../../assets/house.jpg"
import './CreateUser.scss';

export default function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const userData = {
    firstName,
    lastName,
    email,
  };

  const validateInputs = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return Object.keys(errors).length === 0 ? true : errors;
  };

  const validationResult = validateInputs();

  const handleCreateUser = () => {
    if (validationResult === true) {
      console.log("Creating user...");
      signUp(email, password, userData);
    } else {
      console.error("Validation errors:", validationResult);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("User signed in with Google:", user);
    } catch (error) {
      console.error("Error with Google sign in:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="createUser">
        <div className="createUser__contain">
          {isLargeScreen && <img className="createUser__image" src={house} alt="House" />}
        </div>
        <div className="createUser__container">
          <h1 className="createUser__title">Regístrate</h1>
          <input className="createUser__item" type="text" placeholder="Nombre" onChange={(e) => setFirstName(e.target.value)} />
          <input className="createUser__item" type="text" placeholder="Apellido" onChange={(e) => setLastName(e.target.value)} />
          <input className="createUser__item" type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />

          <div className="createUser__password">
            <input
              className="createUser__item"
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="createUser__eye" onClick={toggleShowPassword}>
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="createUser__password">
            <input
              className="createUser__item"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Repetir contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span className="createUser__eye" onClick={toggleShowConfirmPassword}>
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="createUser__send" onClick={handleCreateUser}>Registrar</div>
          <div className="createUser__content">
            <p>Registrarse con </p>
            <div className="createUser__networks" onClick={handleGoogleSignIn}><img src={google} className="createUser__google" /></div>
          </div>
        </div>
      </div>
    </>
  );
}

