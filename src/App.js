import React, { useEffect, useState } from 'react';
import "./App.css";
import AddTask from './components/tasks/AddTask';
import Tasks from './components/tasks/Tasks';

const App = () => {

  const [lista, setLista] = useState([]);

  const [nuevoDato, setNuevoDato] = useState('');

  const handleOnChange = (event) => {
    setNuevoDato(event.target.value);
  }

  const handleAddList = () => {
    setLista([
      ...lista,
      nuevoDato
    ]);
    setNuevoDato('');
  }

  const handleRemoveTask = (pos) => {
    const newList = lista.filter((task, index)=>{
      if(index !== pos){
        return task;
      }
    });
    setLista(newList);
  }

  useEffect(() => {
    setTimeout(() => {
      setLista([
        'Tarea 1.1',
        'Tarea 1.2',
        'Tarea 1.3',
        'Tarea 1.4',
        'Tarea 1.5',
        'Tarea 1.6',
        'Tarea 1.7',
      ])
    }, 2000);
  }, []);

  return (
    <div className="containerUsers">
      <AddTask 
        handleOnChange={handleOnChange}
        nuevoDato={nuevoDato}
        handleAddList={handleAddList}
      />
      <Tasks 
        lista={lista}
        handleRemoveTask={handleRemoveTask}
      />
    </div>
  )
}

export default App;
