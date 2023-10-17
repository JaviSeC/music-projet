import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
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

export const Admin = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [songData, setSongData] = useState({
    Imagen: "",
    SongName: "",
    FilmName: "",
    Audio: "",
    Name_Categories: 0,
  });

  const [errorMessages, setErrorMessages] = useState({
    Imagen: "",
    SongName: "",
    FilmName: "",
    Audio: "",
    Name_Categories: "",
  });

  const [showForm, setShowForm] = useState(false);

  const handleAddSong = async () => {
    event.preventDefault();
    console.log("Entrando en handleSignUp"); // Verifica si esta función se ejecuta
    // Verificar si los campos están vacíos
    const { Imagen, SongName, FilmName, Audio, Name_Categories } = songData;

    const newErrorMessages = {
      Imagen: !Imagen ? "Imagen Url is required" : "",
      SongName: !SongName ? "SongName is required" : "",
      FilmName: !FilmName ? "FilmName is required" : "",
      Audio: !Audio ? "Audio Url is required" : "",
      Name_Categories: !Name_Categories ? "Name_Categories is required" : "",
    };
    // Si algún campo está vacío, no procedemos con el registro
    if (!Imagen || !SongName || !FilmName || !Audio || !Name_Categories) {
      setErrorMessages(newErrorMessages);
      return;
    }
    // Crear un nuevo usuario con los datos ingresados
    const newSong = {
      // Id_Users : '',
      Imagen: songData.Imagen,
      SongName: songData.SongName,
      FilmName: songData.FilmName,
      Audio: songData.Audio,
      Name_Categories: songData.Name_Categories,
      // Id_rol: ''
    };
    // Simular el envío de datos a la "API" falsa (en este caso, al archivo register.json)
    console.log("Datos que se envían:", newSong);
    try {
      const url = "https://localhost:7110/SongsControllers/Post";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Imagen,
          SongName,
          FilmName,
          Audio,
          Name_Categories,
        }),
      });

      if (response.ok) {
        console.log("Registro exitoso");
        Swal.fire("Cuenta creada exitosamente", "", "success");
      } else {
        console.error("Error en la solicitud:", response);
        Swal.fire("Error", "No se pudo crear la cuenta", "error");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      Swal.fire("Error", "Ha ocurrido un error en el servidor", "error");
    }

    // Limpiar los campos después de registrar al usuario y restablecer los mensajes de error

    setSongData({
      Imagen: "",
      SongName: "",
      FilmName: "",
      Audio: "",
      Name_Categories: 0,
    });

    setErrorMessages({
      Imagen: "",
      SongName: "",
      FilmName: "",
      Audio: "",
      Name_Categories: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSongData({
      ...songData,
      [name]: value,
    });
  };

  const toggleForm = () => {
    setShowForm(!showForm); // Cambia el estado para mostrar/ocultar el formulario
  };

  useEffect(() => {
    axios
      .get("https://localhost:7110/UsersControllers/GetUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuarios", error);
      });
  }, []);

  const handleDeleteUser = (userId: string) => {
    axios
      .delete(
        `https://localhost:7110/UsersControllers/DeleteUser?UserName=${userId}`
      )
      .then(() => {
        // Eliminación exitosa, ahora obtén la lista actualizada de usuarios
        axios
          .get("https://localhost:7110/UsersControllers/GetUsers")
          .then((response) => {
            setUsers(response.data); // Actualiza la lista de usuarios con la nueva data
          })
          .catch((error) => {
            console.error("Error al obtener la lista de usuarios", error);
          });
      })
      .catch((error) => {
        console.error(
          `Error al eliminar el usuario con UserName ${userId}`,
          error
        );
      });
  };

  const filteredUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Canciones</h1>

      <button onClick={toggleForm}>Agregar Canción</button>

      {showForm && (
        <form onSubmit={handleAddSong}>
          <div>
            <label>Imagen </label>
            <input
              type="text"
              name="Imagen"
              value={songData.Imagen}
              onChange={handleInputChange}
            />
            <span>{errorMessages.Imagen}</span>
          </div>
          <div>
            <label>SongName</label>
            <input
              type="text"
              name="SongName"
              value={songData.SongName}
              onChange={handleInputChange}
            />
            <span>{errorMessages.SongName}</span>
          </div>
          <div>
            <label>FilmName</label>
            <input
              type="text"
              name="FilmName"
              value={songData.FilmName}
              onChange={handleInputChange}
            />
            <span>{errorMessages.FilmName}</span>
          </div>
          <div>
            <label>Audio</label>
            <input
              type="text"
              name="Audio"
              value={songData.Audio}
              onChange={handleInputChange}
            />
            <span>{errorMessages.Audio}</span>
          </div>
          <div>
            <label>Categoría</label>
            <select
              name="Name_Categories"
              value={songData.Name_Categories}
            >
              <option value="0">Selecciona una categoría</option>
              <option value="1">Oscar's</option>
              <option value="2">Animadas</option>
              <option value="3">Clásicas</option>
              <option value="4">Terror</option>
              <option value="5">Games</option>
            </select>
            <span>{errorMessages.Name_Categories}</span>
          </div>
          <button type="submit">Add Song</button>
        </form>
      )}
      <h1>Usuarios</h1>
      <div className="UsersList">
        <input
          type="text"
          placeholder="Buscar por Usuario"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="All">
          {filteredUsers.map((user) => (
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
};

export default Admin;
