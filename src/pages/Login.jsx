import { useState } from "react";
import { signIn, signInWithGoogle } from "../functions/auth";

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

  // Función para manejar el inicio de sesión con Google
  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("User signed in with Google:", user);
    } catch (error) {
      console.error("Error with Google sign in:", error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginUser}>Login</button>

      <hr />
      {/* Botón para iniciar sesión con Google */}
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
}

