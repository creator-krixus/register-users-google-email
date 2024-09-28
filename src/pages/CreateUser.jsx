import { useState } from "react"
import { signUp, signInWithGoogle } from "../functions/auth";

export default function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userData = {
    firstName,
    lastName,
    email,
  }
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

    // Si no hay errores, retorna true, de lo contrario retorna el objeto de errores
    return Object.keys(errors).length === 0 ? true : errors;
  }

  // Uso del método de validación
  const validationResult = validateInputs();

  const handleCreateUser = () => {
    if (validationResult === true) {
      console.log("Creating user...");
      signUp(email, password, userData);
    } else {
      // Aquí podrías mostrar los errores en la interfaz o loguearlos
      console.error("Validation errors:", validationResult);
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("User signed in with Google:", user);
    } catch (error) {
      console.error("Error with Google sign in:", error);
    }
  };
  return (
    <>
      <h1>Register</h1>
      <div>
        <input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}></input>
        <input type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}></input>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
        <input type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}></input>
        <button onClick={handleCreateUser}>Registrar</button>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </div>
    </>
  )
}
