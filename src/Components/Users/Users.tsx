import "./Users.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Recupera el nombre de usuario del almacenamiento (localStorage)
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      // Si no hay nombre de usuario en el almacenamiento, redirige a la página de inicio de sesión
      navigate("/PageLogin");
    }
  }, []);

  return (
    <>
      <div className="BodyUser">
        <h2>Bienvenido, {localStorage.getItem("username")}</h2>
      </div>
    </>
  );
};
export default Users;
