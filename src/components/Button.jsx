// 1er - Importar React
import React from 'react'

// 2do-crear un componente funcional

const Button = ({type,text}) => {
    return (
        <button className={type}>
            <span>{text}</span>
        </button>
    )
}

//3er- Exportar el componente
export default Button