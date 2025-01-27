import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContex';
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div className='gridSearch'>
      <div className='barSearch'>
        <span className='material-symbols-outlined'>search</span>
        <input
          placeholder="Write here to filter tasks"
          maxLength={45}
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export { TodoSearch };