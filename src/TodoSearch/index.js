import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContex';
function TodoSearch(){
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  return(
    <div className='gridSearch'>
      <input 
      placeholder="Escribe para filtrar" 
      maxLength={45}
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      />
    </div>
    );
}

export { TodoSearch };