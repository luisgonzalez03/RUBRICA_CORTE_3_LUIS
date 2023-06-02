import React from 'react'
import ReactDOM from 'react-dom/client'
import Contador from './components/contador.jsx'
import HolaMundo from './components/HolaMundo.jsx'
import PeticionApi from './components/peticionApi.jsx'
import Variables from './components/Variables.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PeticionApi />
  </React.StrictMode>,
)
