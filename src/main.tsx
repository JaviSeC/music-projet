
 import React from 'react'
 import ReactDOM from 'react-dom/client'
 import Header from './Components/Header/Header'
 import Carousel from './Components/Carousel/Carousel'
 import Menu from './Components/Menu/Menu'
 import BodyClassic from './Components/ClassicBody/BodyClassic'; // Asegúrate de que la ruta sea correcta
//  import Login from './Components/Login/Login'
// import SignUp from './Components/SingUp/SingUp'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Carousel />
     <BodyClassic />
  </React.StrictMode>,
)


/*ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Login />
    <SignUp />
  </React.StrictMode>,
)*/
