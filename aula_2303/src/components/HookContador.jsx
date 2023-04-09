import React from 'react'
import { useState } from 'react'

const HookContador = () => {
    const [contator, setcontator] = useState(1)

    function incremetarContator(){
        setcontator(contator+1)
    }
  return (
    <div>
        <h1>Contator com useState</h1>
        <button onClick={incremetarContator}>Incrementar contador</button>
        <h1>O contatdor esta em: {contator}</h1>
    </div>
  )
}

export default HookContador