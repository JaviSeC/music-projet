import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Tops from "./Components/Tops/Tops";
import Carousel from "./Components/Carousel/Carousel";
import Menu from "./Components/Menu/Menu";
import BodyClassic from './Components/ClassicBody/BodyClassic'; 
import SoundTrack from './Components/SoundTrack/Sound'; 

// import SoundTrack from './Components/SoundTrack/Sound';

//  import Login from './Components/Login/Login'
// import SignUp from './Components/SingUp/SingUp'
import "./index.css";




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <NextUIProvider>
    <Header />
    <Menu />
    <Body/>
    <Carousel />
<SoundTrack />
     {/* <BodyClassic />  */}
      
      </NextUIProvider>
  </React.StrictMode>,
);




