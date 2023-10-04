import "./Menu.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <a href="#">Terror👻</a>
          </div>
        )}
      </div>
      <div className="boxuser">
        <Link to="/PageLogin">
          <button className="loginbutton">
            <img
              className="login"
              src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695319832/_8aeb1ec2-ba3a-4b6d-a850-a142ccb46b8a-removebg-preview_cfwx19.png"
              alt=""
            />
          </button>
        </Link>
        <Link to="/PageSingUp">
          <button className="registrobutton">
            <img
              className="registro"
              src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695321417/grid_landscape-removebg-preview_smbjbe.png"
              alt=""
            />
          </button>
        </Link>
        {/* <Link to="/PageAdmin">
          <button>
           <strong> Admin </strong>
          </button>
        </Link> */}
      </div>
    </div>
  );
}
