
 import React from 'react'
 import ReactDOM from 'react-dom/client'
 import {NextUIProvider} from "@nextui-org/react";
 import Header from './Components/Header/Header'
 import Body from './Components/Body/Body'
// import Tops from './Components/Tops/Tops';
 import Carousel from './Components/Carousel/Carousel'
 import Menu from './Components/Menu/Menu'
 import BodyClassic from './Components/ClassicBody/BodyClassic'; // Asegúrate de que la ruta sea correcta
 import './index.css'
import Footer from './Components/Footer/Footer';


//  import Login from './Components/Login/Login'
// import SignUp from './Components/SingUp/SingUp'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <NextUIProvider>
    <Header />
    <Menu />
    <Body/>
    <Carousel />
     <BodyClassic />
      <Footer/>
      </NextUIProvider>
  </React.StrictMode>,
)


/*ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Login />
    <SignUp />
  </React.StrictMode>,
)*/

//  import Login from './Components/Login/Login'
// import SignUp from './Components/SingUp/SingUp'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <SignUp />
   

//     <Login />

//   </React.StrictMode>
// )

//____________________________________________________________________________________________________

// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <React.StrictMode>
//       <NextUIProvider>
//       <Header /> 
//       <Menu />
//       <Body />
//      <Tops/>
//      <Carousel />
//       </NextUIProvider>
//     </React.StrictMode>,
//   )
   



// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <React.StrictMode>
//       <NextUIProvider>
//       <Admin />
//       <Footer />
//       </NextUIProvider>
//     </React.StrictMode>
//  )