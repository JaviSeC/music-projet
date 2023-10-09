import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import PageInitial from "./Views/PageInitial/PageInitial";
import PageLogin from "./Views/PageLogin/PageLogin";
import PageSingUp from "./Views/PageSingUp/PageSingUp";
import PageBodyClassic from "./Views/Classic/ClassicView";
import PageAdmin from "./Views/PageAdmin/PageAdmin";
import PageSound from "./Views/SoundTracks/SoundView";
import Animadas from "./Views/MusicaAnimada/MusicaAnimada";
import "./index.css";
import PageBodyTerror from "./Views/TerrorView/TerrorView";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInitial />} />
        <Route path="/PageLogin" element={<PageLogin />} />
        <Route path="/PageSingUp" element={<PageSingUp />} />
        <Route path="/PageAdmin" element={<PageAdmin />} />
        <Route path="/ClassicView" element={<PageBodyClassic />}/> 
        <Route path="/SoundTracksView" element={<PageSound/>}/> 
        <Route path="/PeliculasAnimadasView" element={<Animadas/>}/> 
        <Route path="/TerrorView" element={<PageBodyTerror/>}/> 
      </Routes>

      <Footer />
    </BrowserRouter>
  </>
);
