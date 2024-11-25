// pages/auth/signin.js
import { signIn } from "next-auth/react"; // Импортируем функцию signIn
import { useState } from "react";

export default function SignIn() {
  const [error, setError] = useState(null);

  const handleLogin = async (provider) => {
    try {
      const result = await signIn(provider, { callbackUrl: "/" });
      if (result?.error) {
        setError(result.error);
      }
    } catch (error) {
      setError("Что-то пошло не так!");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>Войти в систему</h1>
      
      {error && <div style={{ color: "red", marginBottom: "20px" }}>{error}</div>}
      
      <button onClick={() => handleLogin("google")} style={buttonStyle}>
        Войти через Google
      </button>
      <button onClick={() => handleLogin("github")} style={buttonStyle}>
        Войти через GitHub
      </button>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#0070f3",
  border: "none",
  borderRadius: "5px",
  color: "white",
};
// pages/index.js
import Welcome from "../components/Welcome";  // Импортируем компонент

export default function Home() {
  return (
    <div>
      <h1>Главная страница</h1>
      <Welcome />  {/* Вставляем компонент приветствия */}
    </div>
  );
}
