import { useState } from "react";
import { signIn, signInWithGoogle } from "../../functions/auth";
import google from "../../assets/google.png"
import house from "../../assets/houseSnow.jpg"
import "./Login.scss"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }

    return Object.keys(errors).length === 0 ? true : errors;
  };

  const handleLoginUser = () => {
    const validationResult = validateInputs();
    if (validationResult === true) {
      console.log("Logging in user...");
      signIn(email, password);
    } else {
      console.error("Validation errors:", validationResult);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error with Google sign in:", error);
    }
  };

  return (
    <div className="login">
      <div className="login__containerImage">
        <img className="login__image" src={house} />
      </div>
      <div className="login__container">
        <input
          className="login__item"
          type="email"
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login__item"
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login__send" onClick={handleLoginUser}>Login</div>
        <div className="login__content">
          <div className="login__text" onClick={handleGoogleSignIn}>
            <p>Ingresa con Google</p>
            <img src={google} className="login__google" /></div>
        </div>
      </div>
    </div>
  );
}

