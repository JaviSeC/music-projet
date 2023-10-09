import { useEffect, useState } from "react";
import axios from "axios";
import Headerunico from "../Headerunico/Headerunico";
import "./Admin.css";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  // Otras propiedades de usuario
}

function Admin() {
  const [users, setUsers] = useState<User[]>([]); // Usa el tipo User

  useEffect(() => {
    axios
      .get("https://localhost:7110/UsersControllers/GetUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuarios", error);
      });
  }, []); // Dependencia vacía para que se ejecute al cargar la página

  const handleDeleteUser = (userId: string) => {
    axios
      .delete(
        `https://localhost:7110/UsersControllers/DeleteUser?UserName=${userId}`
      )
      .then(() => {
        // Eliminación exitosa, puedes actualizar la lista de usuarios
        // o recargar la página si lo deseas
        // Por ejemplo, puedes hacer una nueva solicitud GET para obtener la lista actualizada de usuarios.
      })
      .catch((error) => {
        console.error(
          `Error al eliminar el usuario con UserName ${userId}`,
          error
        );
      });
  };

  return (
    <>
      <Headerunico />
      <h1>Usuarios</h1>
      <div className="UsersList">
        <ul className="All">
          {users.map((user) => (
            <li key={user.id} className="ListUser">
              <span className="user-info">
                <strong>Nombre:</strong> {user.firstName}&nbsp;&nbsp;
                <strong>Apellido:</strong> {user.lastName}&nbsp;&nbsp;
                <strong>Usuario:</strong> {user.userName}&nbsp;&nbsp;
                <strong>Email:</strong> {user.email}&nbsp;&nbsp;
                <strong>Contraseña:</strong> {user.password}&nbsp;&nbsp;
                {/* Mostrar otras propiedades según sea necesario */}
              </span>
              <button
                className="Admidelete"
                onClick={() => handleDeleteUser(user.userName)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Admin;
