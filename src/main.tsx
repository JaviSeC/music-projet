 import React from 'react'
 import ReactDOM from 'react-dom/client'
 import {NextUIProvider} from "@nextui-org/react";
 import Header from './Components/Header/Header'
 import Body from './Components/Body/Body'
 import Tops from './Components/Tops/Tops';
 import Carousel from './Components/Carousel/Carousel'
 import Menu from './Components/Menu/Menu'
//  import Login from './Components/Login/Login'
// import SignUp from './Components/SingUp/SingUp'
import './index.css'
import Footer from './Components/Footer/Footer'







// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <SignUp />
   

//     <Login />

//   </React.StrictMode>
// )


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <NextUIProvider>
      <Header /> 
      <Menu />
      <Body /> 
     <Carousel />
      <Tops />
      <Footer />
      </NextUIProvider>
    </React.StrictMode>,
  )


