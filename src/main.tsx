// import ReactDOM from "react-dom/client"
// import { NextUIProvider } from "@nextui-org/react";
// import Header from "./Components/Header/Header";
// import Body from "./Components/Body/Body";
// import Tops from "./Components/Tops/Tops";
// import Carousel from "./Components/Carousel/Carousel";
// import Menu from "./Components/Menu/Menu";
// import Login from './Components/Login/Login'
// import SignUp from './Components/SingUp/SingUp'

// import Admin from "./Components/Adminview/Admin";
// import Footer from "./Components/Footer/Footer";
// import "./index.css"


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <>
// <Admin/>
// <Footer/>
//   </>
// )

 //________________________________________________________________________________________________________

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import PageInitial from './Views/PageInitial/PageInitial';
import PageLogin from './Views/PageLogin/PageLogin';
import PageSingUp from './Views/PageSingUp/PageSingUp';
// import BodyClassic from "./Components/ClassicBody/BodyClassic";
import PageBodyClassic from "./Views/Classic/ClassicView";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <BrowserRouter>
 
  <Routes>
  <Route path="/" element={<PageInitial />} />
  <Route path="/PageLogin" element={<PageLogin />} />
  <Route path="/PageSingUp" element={<PageSingUp />} />
  <Route path="/ClassicView" element={<PageBodyClassic/>}/> 
  </Routes>

  <Footer />

  </BrowserRouter>
  </>
)
