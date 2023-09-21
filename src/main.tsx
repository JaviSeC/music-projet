import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from "@nextui-org/react";
import Body from './Components/Body/Body'
import Tops from './Components/Tops/Tops';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <NextUIProvider>
      <Body />
      <Tops />
      </NextUIProvider>
    </React.StrictMode>,
  )


