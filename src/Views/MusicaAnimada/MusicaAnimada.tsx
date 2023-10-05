
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import PeliculasAnimadas from "../../Components/MusicaAnimada/MusicaAnimada";
import "./MusicaAnimada.css";

export default function MusicaAnimada() {
  return (
    <>
    {/* <div className="SoundTracks"> */}
    <Header/>
    {/* <div className="homeSoundTracks"> */}
      <Menu />
      {/* </div> */}
    <PeliculasAnimadas/>
    {/* </div> */}
    </>
  );
}