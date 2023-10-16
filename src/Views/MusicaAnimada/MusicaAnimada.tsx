<<<<<<< HEAD
import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import MenuNewUser from "../../Components/Menu/MenuNewUser";
import PeliculasAnimadas from "../../Components/MusicaAnimada/MusicaAnimada";
import "./MusicaAnimada.css";

export default function MusicaAnimada() {
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
    <Header/>
    {userRole === 2 ? <MenuNewUser /> : <Menu />}  
    <PeliculasAnimadas/>
=======
import PeliculasAnimadas from "../../Components/MusicaAnimada/MusicaAnimada";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import "./MusicaAnimadaview.css";

export default function Animadas() {
  return (
    <>
<div className="animadaview">
    <Header/>
{/* <div className="menuview"> */}
      {/* <Menu />  */}
      <PeliculasAnimadas/>
      {/* </div> */}
   
    </div>
>>>>>>> origin/Javier
    </>
  );
}