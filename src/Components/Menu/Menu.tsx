import "./Menu.css";
import { useState } from "react";

export default function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="Container">
      <div className="boxSong">
        <button className="loginbutton">
          <img
            className="home"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695323366/images-removebg-preview_1_xuayhf.png"
            alt=""
          />
        </button>
        <button className="registrobutton" onClick={toggleDropdown}>
          <img
            className="categorie"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695367319/musica-removebg-preview_scp9yc.png"
            alt=""
          />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="#">SoundTracks</a>
            <a href="#">Peliculas Animadas</a>
            <a href="#">Clasicas</a>
            <a href="#">Actuales</a>
          </div>
        )}
      </div>
      <div className="boxuser">
        <button className="loginbutton">
          <img
            className="login"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695319832/_8aeb1ec2-ba3a-4b6d-a850-a142ccb46b8a-removebg-preview_cfwx19.png"
            alt=""
          />
        </button>
        <button className="registrobutton">
          <img
            className="registro"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695321417/grid_landscape-removebg-preview_smbjbe.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
