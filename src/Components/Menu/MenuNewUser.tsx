import "./MenuNewUser.css"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MenuNewUser() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Aquí puedes realizar las tareas de cierre de sesión, como limpiar el almacenamiento local, etc.
    // Por ejemplo, para eliminar el rol del usuario del almacenamiento local:
    localStorage.removeItem("userRole");
    
    // Luego, redirige al usuario a la página de inicio de sesión o a donde prefieras.
    window.location.reload();
  };

  return (
    <div className="Container">
      <div className="boxSong">
        <Link to="/">
          <button className="loginbutton">
            <img
              className="home"
              src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695323366/images-removebg-preview_1_xuayhf.png"
              alt=""
            />
          </button>
        </Link>
        <button className="registrobutton" onClick={toggleDropdown}>
          <img
            className="categorie"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695367319/musica-removebg-preview_scp9yc.png"
            alt=""
          />
        </button>
        {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="/SoundTracksView">Ganadores Oscar🏆</a>
              <a href="/PeliculasAnimadasView">Animadas🧸</a>
              <a href="/ClassicView">Clasicas📀</a>
              <a href="/TerrorView">Terror👻</a>
               <a href="/Games">Games🎮</a>
            </div>
          )}
      </div>
      <div className="boxuser">
        <Link to="/PageUser">
          <button className="loginbutton">
            <img
              className="Usuario"
              src="https://res.cloudinary.com/da7ffijqs/image/upload/v1696870066/_89a10961-f024-4f1a-8773-19ebe77677f9-removebg-preview_qgqop8.png"
              alt="Mi Usuario"
            />
          </button>
        </Link>
        <Link to="/">
          <button className="registrobutton" onClick={handleLogout}>
            <img
              className="CerrarSesion"
              src="https://res.cloudinary.com/da7ffijqs/image/upload/v1696869249/_8bfc1014-b566-40f0-a412-0ff913c51437-removebg-preview_tpa0mw.png"
              alt="Cerrar sesion"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}