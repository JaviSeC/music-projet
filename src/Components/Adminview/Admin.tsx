import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [NewProduct, setNewProduct] = useState({
    Imagen: "",
    SongName: "",
    FilmName: "",
    Audio: "",
    Id_Categories: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    Imagen: "",
    SongName: "",
    FilmName: "",
    Audio: "",
    Id_Categories: "",
  });

  const handleAddProduct = async () => {
    event.preventDefault();
    console.log("Entrando en handleSignUp");

    const { Imagen, SongName, FilmName, Audio, Id_Categories } = NewProduct;

    const newErrorMessages = {
      Imagen: !Imagen ? "Imagen is required" : "",
      SongName: !SongName ? "SongName is required" : "",
      FilmName: !FilmName ? "FilmName is required" : "",
      Audio: !Audio ? "Audio is required" : "",
      Id_Categories: !Id_Categories ? "Name_Categories" : "",
    };

    if (!Imagen || !SongName || !FilmName || !Audio || !Id_Categories) {
      setErrorMessages(newErrorMessages);
      return;
    }

    const newProduct = {
      // Id_Products : '',
      Imagen: NewProduct.Imagen,
      SongName: NewProduct.SongName,
      FilmName: NewProduct.FilmName,
      Audio: NewProduct.Audio,
      Id_Categories: NewProduct.Id_Categories,
    };

    console.log("Datos que se envían:", newProduct);

    try {
      const url = "https://localhost:7110/ProductsControllers/Post";
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
          Id_Categories: "",
        }),
      });

      if (response.ok) {
        console.log("Registro exitoso");
        Swal.fire("Producto añadido", "", "success");
      } else {
        console.error("Error en la solicitud:", response);
        Swal.fire("Error", "No se pudo añadir el producto", "error");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      Swal.fire("Error", "Ha ocurrido un error en el servidor", "error");
    }

    // Reinicia el formulario
    setNewProduct({
      Imagen: "",
      SongName: "",
      FilmName: "",
      Audio: "",
      Id_Categories: "",
    });

    setErrorMessages({
      Imagen: "",
      SongName: "",
      FilmName: "",
      Audio: "",
      Id_Categories: "",
    });
  };

  const getUsers = () => {
    axios
      .get("https://localhost:7110/UsersControllers/GetUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuarios:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "Id_Categories") {
      setNewProduct({
        ...NewProduct,
        [name]: value,
      });
    }

    const handleDeleteUser = (userId: string) => {
      axios
        .delete(
          `https://localhost:7110/UsersControllers/DeleteUser?UserName=${userId}`
        )
        .then(() => {
          getUsers();
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
        <Headerunico />
        <h1>Canciones</h1>
        <button onClick={() => setShowAddProductForm(!showAddProductForm)}>
          {showAddProductForm ? "Cancelar" : "Agregar Canciones"}
        </button>

        {showAddProductForm && (
          <div className="AddProductForm">
            <label htmlFor="videoSrc">Imagen URL:</label>
            <input
              type="text"
              id="Imagen"
              name="Imagen"
              value={NewProduct.Imagen}
              onChange={handleInputChange}
              required
            />
            <span className="error-message">{errorMessages.Imagen}</span>
            <label htmlFor="videoSrc">Nombre Cancion:</label>
            <input
              type="text"
              id="SongName"
              name="SongName"
              value={NewProduct.SongName}
              onChange={handleInputChange}
              required
            />
            <span className="error-message">{errorMessages.SongName}</span>
            <label htmlFor="videoSrc">Autor:</label>
            <input
              type="text"
              id="FilmName"
              name="FilmName"
              value={NewProduct.FilmName}
              onChange={handleInputChange}
              required
            />
            <span className="error-message">{errorMessages.FilmName}</span>
            <label htmlFor="videoSrc">Audio URL:</label>
            <input
              type="text"
              id="Audio"
              name="Audio"
              value={NewProduct.Audio}
              onChange={handleInputChange}
              required
            />
            <span className="error-message">{errorMessages.Audio}</span>
            <label htmlFor="videoSrc">Audio URL:</label>
            <input
              type="text"
              id="Id_Categories"
              name="Id_Categories"
              value={NewProduct.Id_Categories}
              onChange={handleInputChange}
              required
            />
            <span className="error-message">{errorMessages.Id_Categories}</span>
            <button onClick={handleAddProduct}>Agregar Producto</button>
          </div>
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
}
export default Admin;
