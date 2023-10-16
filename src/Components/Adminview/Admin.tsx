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

interface Category {
  id: number;
  Name_Categories: string;
}

export const Admin = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [songData, setSongData] = useState({
    Imagen: "",
    SongName: "",
    FilmName: "",
    Audio: "",
    Id_Categories: 0,
  });

  const [errorMessages, setErrorMessages] = useState({
    Imagen: "",
    SongName: "",
    FilmName: "",
    Audio: "",
    Id_Categories: "",
  });

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Obtener la lista de categorías desde el servidor
    axios
      .get("https://localhost:7110/SongsControllers/GetCategorias")
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  const [showForm, setShowForm] = useState(false);

  const handleAddSong = async () => {
    event.preventDefault();

    const { Imagen, SongName, FilmName, Audio, Id_Categories } = songData;

    const newErrorMessages = {
      Imagen: !Imagen ? "Imagen URL is required" : "",
      SongName: !SongName ? "Title is required" : "",
      FilmName: !FilmName ? "Artist is required" : "",
      Audio: !Audio ? "Audio URL is required" : "",
      Id_Categories: Id_Categories === 0 ? "Category is required" : "",
    };

    if (!Imagen || !SongName || !FilmName || !Audio || Id_Categories === 0) {
      setErrorMessages(newErrorMessages);
      return;
    }

    const formData = new FormData();
    formData.append("Imagen", Imagen);
    formData.append("SongName", SongName);
    formData.append("FilmName", FilmName);
    formData.append("Audio", Audio);

    try {
      const url = "https://localhost:7110/SongsControllers/Post";
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Canción agregada exitosamente");
        // Restablecer el formulario
        setSongData({
          Imagen: "",
          SongName: "",
          FilmName: "",
          Audio: "",
          Id_Categories: 0,
        });
        setErrorMessages({
          Imagen: "",
          SongName: "",
          FilmName: "",
          Audio: "",
          Id_Categories: "",
        });
      } else {
        console.error("Error en la solicitud:", response);
        Swal.fire("Error", "No se pudo agregar la canción", "error");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      Swal.fire("Error", "Ha ocurrido un error en el servidor", "error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSongData({
      ...songData,
      [name]: value,
    });
  };

  const handleCategoryChange = (e) => {
    const Id_Categories = parseInt(e.target.value, 10);
    setSongData({
      ...songData,
      Id_Categories: Id_Categories,
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
              name="Id_Categories"
              value={songData.Id_Categories}
              onChange={handleCategoryChange}
            >
              <option value={0}>Seleccionar Categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.Name_Categories}{" "}
                  {/* Mostrar el nombre de la categoría */}
                </option>
              ))}
            </select>
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
