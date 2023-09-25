import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'

//import Audioplayer from './Components/Audioplayer/Audioplayer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    
    <Carousel />
  </React.StrictMode>,
)
