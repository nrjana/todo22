// components/Welcome.js
import { useSession, signOut } from "next-auth/react";  // Импортируем хук useSession и функцию signOut

export default function Welcome() {
  const { data: session, status } = useSession();  // Получаем данные сессии

  if (status === "loading") {
    return <div>Загрузка...</div>;  // Пока сессия загружается
  }

  if (session) {
    // Если пользователь авторизован
    return (
      <div>
        <h2>Добро пожаловать, {session.user.name}</h2>  {/* Отображаем имя пользователя */}
        <p>Ваш email: {session.user.email}</p>  {/* Отображаем email */}
        <button onClick={() => signOut()}>Выйти</button>  {/* Кнопка выхода */}
      </div>
    );
  }

  return (
    <div>
      <h2>Вы не авторизованы</h2>  {/* Если пользователь не авторизован */}
    </div>
  );
}
