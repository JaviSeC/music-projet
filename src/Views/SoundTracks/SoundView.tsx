import Sound from "../../Components/SoundTrack/Sound";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import "./SoundView.css";

export default function PageSound() {
  return (
    <>
    <div className="SoundTracks">
    <Header/>
     <div className="homeSoundTracks"> 
       <Menu /> 
       </div> 
    <Sound />
    </div>
    </>
  );
}