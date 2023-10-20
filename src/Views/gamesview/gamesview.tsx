import Header from "../../Components/Header/Header";
// import Menu from "../../Components/Menu/Menu";
import { useState, useEffect } from "react";
import Menu from "../../Components/Menu/Menu";
import BodyGames from "../../Components/games/games";
import "./gamesview.css";
import MenuNewUser from "../../Components/Menu/MenuNewUser";

export default function PageBodyGames() {
  const [userRole, setUserRole] = useState(0); // 0: Sin iniciar sesión, 1: Rol 1 (admin), 2: Rol 2
  // Puedes obtener el rol del usuario desde el almacenamiento local o desde tu sistema de autenticación
  useEffect(() => {
    // Simplemente como ejemplo, establece el rol de usuario aquí.
    // Deberás modificar esto según tu lógica de autenticación.
    const role = localStorage.getItem("userRole");
    if (role) {
      setUserRole(parseInt(role, 10));
    }
  }, []);
  return (
    <>
      <div className="Games">
        <Header />
        <div className="games">
          {userRole === 2 ? <MenuNewUser /> : <Menu />}
        </div>
        <BodyGames />
      </div>
    </>
  );
}
