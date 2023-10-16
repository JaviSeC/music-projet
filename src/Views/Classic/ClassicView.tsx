import { useState, useEffect } from "react";
import BodyClassic from "../../Components/ClassicBody/BodyClassic";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import "./ClassicView.css";
<<<<<<< HEAD
import MenuNewUser from "../../Components/Menu/MenuNewUser";
=======

>>>>>>> origin/Javier
export default function PageBodyClassic() {
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
    <div className="CineClasico">
    <Header/>
<<<<<<< HEAD
    <div className="homeClassic">
    {userRole === 2 ? <MenuNewUser /> : <Menu />}  
      </div>
=======
    {/* <div className="homeClassic">
      <Menu />
      </div> */}
>>>>>>> origin/Javier
    <BodyClassic />
    </div>
    </>
  );
}

