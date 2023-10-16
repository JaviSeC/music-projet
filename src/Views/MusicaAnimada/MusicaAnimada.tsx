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
    </>
  );
}