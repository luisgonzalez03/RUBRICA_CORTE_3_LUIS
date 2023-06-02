import React from 'react'
import { useState } from 'react'
const PeticionApi = () => {
    const [personajes, setPersonajes] = useState([])
    const [paginacion, setPaginacion] = useState(1)
    const [contador, setcontador] = useState(1)

    const traerPersonajes = async() =>{
        try{
            const res = await fetch(`https://digimon-api.vercel.app/api/digimon`)
            const respuesta = await res.json()
            const auxPersonajes = respuesta
            console.log(auxPersonajes)
            setPersonajes(auxPersonajes)
        }catch(error){
            console.log(error)
        }
    }

    const siguiente = () =>{
        setPaginacion(paginacion+1)
        traerPersonajes()
    }
    const atras = () =>{
        setPaginacion(paginacion-1)
        traerPersonajes()
    }

  return (
    <div>
        <h1>DIGIMON APIS</h1>
        <button onClick={traerPersonajes}>traer personajes</button>
        <button onClick={siguiente}>siguiente</button>
        <button onClick={atras}>Atrás</button>
        {
            personajes.map((aux)=> (
                <div key={aux.name}>
                <h4>{aux.name}</h4>
                <img src={aux.img} alt={aux.name} />
            </div>
            ))
        }
    </div>
  )
}

export default PeticionApi