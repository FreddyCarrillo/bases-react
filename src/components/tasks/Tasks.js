import React from 'react';

const Tasks = ({
  lista,
  handleRemoveTask
}) => {

  return (
    <div>
      {
        lista?.map((tarea, index)=>(
          <div key={index} className='wrapperTask'>
            <div>
              {
                tarea
              }
            </div>
            <div 
              className='wrapperDelete' 
              onClick={()=>{handleRemoveTask(index)}}
            >
              X
            </div>
          </div>
        ))
      }

      {
        (lista.length === 0)
          &&
            <div>
              No tienes tareas pendientes
            </div>
      }

    </div>
  )
}

export default Tasks;
