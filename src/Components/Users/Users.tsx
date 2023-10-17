import "./Users.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Users = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    Password: "",
  });

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      navigate("/PageLogin");
    } else {
      axios
        .get(
          `https://localhost:7110/UsersControllers/GetUsers${storedUsername}`
        )
        .then((response) => {
          setUserData(response.data);
        });
    }
  }, [navigate]);

  const handleUpdateUser = () => {
    axios
      .put(
        `https://localhost:7110/UsersControllers/UpdateUser${userData.UserName}`,
        userData
      )
      .then(() => {
        alert("Usuario actualizado exitosamente");
      })
      .catch((error) => {
        console.error("Error al actualizar el usuario:", error);
      });
  };

  // useEffect(() => {
  //   // Recupera el nombre de usuario del almacenamiento (localStorage)
  //   const storedUsername = localStorage.getItem("username");
  //   if (!storedUsername) {
  //     // Si no hay nombre de usuario en el almacenamiento, redirige a la página de inicio de sesión
  //     navigate("/PageLogin");
  //   }
  // }, []);

  return (
    <>
      <div>
        <h2>Bienvenido, {localStorage.getItem("username")}</h2>
        {/* Formulario para actualizar los datos del usuario */}
        <form>
          <label>FirstName:</label>
          <input
            type="text"
            name="FirstName"
            value={userData.FirstName}
            onChange={(e) =>
              setUserData({ ...userData, FirstName: e.target.value })
            }
          />
          <label>LastName:</label>
          <input
            type="text"
            name="LastName"
            value={userData.LastName}
            onChange={(e) =>
              setUserData({ ...userData, LastName: e.target.value })
            }
          />
          <label>Nombre de usuario:</label>
          <input
            type="text"
            name="UserName"
            value={userData.UserName}
            onChange={(e) =>
              setUserData({ ...userData, UserName: e.target.value })
            }
          />
          <label>Email:</label>
          <input
            type="text"
            name="Email"
            value={userData.Email}
            onChange={(e) =>
              setUserData({ ...userData, Email: e.target.value })
            }
          />
          <label>Contraseña:</label>
          <input
            type="password"
            name="Password"
            value={userData.Password}
            onChange={(e) =>
              setUserData({ ...userData, Password: e.target.value })
            }
          />
          {/* Agrega otros campos según tus necesidades */}
          <button type="button" onClick={handleUpdateUser}>
            Actualizar Usuario
          </button>
        </form>
      </div>
    </>
  );
};
export default Users;
