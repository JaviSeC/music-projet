import { useState, useEffect } from "react";
import Body from "../../Components/Body/Body";
import Carousel from "../../Components/Carousel/Carousel";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
//import MenuNewUser from "../../Components/Menu/MenuNewUser";
import Tops from "../../Components/Tops/Tops";
import "./PageInitial.css";
import MenuNewUser from "../../Components/Menu/MenuNewUser";

export default function PageInitial() {
  const [userRole, setUserRole] = useState(0); // 0: Sin iniciar sesión, 1: Rol 1 (admin), 2: Rol 2
   // Puedes obtener el rol del usuario desde el almacenamiento local o desde tu sistema de autenticación
   useEffect(() => {
    // Simplemente como ejemplo, establece el rol de usuario aquí.
    // Deberás modificar esto según tu lógica de autenticación.
    const role = localStorage.getItem("userRole");
    if (role) {
      setUserRole(parseInt(role, 10));
    }
  }, []);
  
  return (
    <>
      <Header />
      <div className="homes">
      {userRole === 2 ? <MenuNewUser /> : <Menu />}
      <Body />
      <Tops />
      </div>
      <Carousel />
    </>
  );
}
