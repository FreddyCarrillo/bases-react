import React from 'react';

const AddTask = (props) => {

  const {
    handleOnChange,
    nuevoDato,
    handleAddList,
  } = props;

  return (
    <div>
      <input 
        type="text" 
        onChange={handleOnChange}
        value={nuevoDato}
      />
      <button onClick={handleAddList}>
        Guardar
      </button>
    </div>
  )
}

export default AddTask;
