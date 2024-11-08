import React from 'react';
import './TodoTitulo.css'
import { TodoContext } from '../TodoContex';

function TodoTitulo({ total, completed}){
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  let deg_var = 0;
  let porcentaje = 0;
  if(totalTodos !== 0 ){
    deg_var = (completedTodos / totalTodos) * 180;
    const grafico = document.querySelector(".grafico");
    grafico.setAttribute('style', `--deg: ${deg_var}deg`);
    porcentaje = Math.round((completedTodos / totalTodos) * 100);
  }
  return(
    <div className='contenedorGraph'>
      <span className='gaph'>
      <span className='grafico'></span>
      <span className='grafico_before'>Avance</span>
      <span className='grafico_after'>{porcentaje}%</span>
      </span>
    </div>
  );
}

export { TodoTitulo };