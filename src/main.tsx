 import React from 'react'
 import ReactDOM from 'react-dom/client'
 import Header from './Components/Header/Header'
 import Body from './Components/Body/Body'
 import Carousel from './Components/Carousel/Carousel'
 import Menu from './Components/Menu/Menu'
//  import Login from './Components/Login/Login'
// import SignUp from './Components/SingUp/SingUp'
import './index.css'
import Footer from './Components/Footer/Footer'
import Tops from './Components/Tops/Tops'








// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <SignUp />
   

//     <Login />

//   </React.StrictMode>
// )


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Header /> 
      <Menu />
      <Body />
      <Tops />
     <Carousel />   
      <Footer />
    </React.StrictMode>,
  )


