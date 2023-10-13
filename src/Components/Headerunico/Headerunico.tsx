import "./Headerunico.css";
import { Link } from "react-router-dom";

export default function Headerunico(){
  
  return (
    <>
      <header className="headerunico">
        <div className="logo-box">
          <img
            className="img-header-unico"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695227385/_c78f550a-1c6e-4dd5-b961-d4c0d793168a-removebg-preview_oah4us.png"
            alt="logo"
          />
        </div>
        <div className="titulo-box">
          <h1 className="titulo">Sound Tracks Magic</h1>
        </div>
        <div>
        <Link to="/">
          <button className="Admi">
            <img
              className="AdmiHome"
              src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695323366/images-removebg-preview_1_xuayhf.png"
              alt=""
            />
          </button>
        </Link>
        </div>
      </header>
    </>
  );

}