import React, { useEffect, useState } from 'react';
import "./App.css";

const App = () => {

  const [lista, setLista] = useState([]);

  const [nuevoDato, setNuevoDato] = useState('');

  const handleOnChange = (event) => {
    setNuevoDato(event.target.value);
  }

  const handleAddList = ( ) => {
    setLista([
      ...lista,
      nuevoDato
    ])
  }

  console.log('lista',lista);
  
  return (
    <div className="containerUsers">
      <div>
        <input type="text" onChange={handleOnChange}/>
        <button onClick={handleAddList}>
          Guardar
        </button>
      </div>
      <div>
        {
          lista.map((tarea, index)=>(
            <div key={index}>
              {
                tarea
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App;
