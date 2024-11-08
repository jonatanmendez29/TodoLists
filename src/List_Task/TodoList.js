import React from 'react';
import './TodoList.css';
import {DeleteIcon} from '../Icons/DeleteIcon';
import { TodoContext } from '../TodoContex';

function TodoList({categoria, idCat, children, onDelete, addTodo, newTask, setNewTask, setNewIdTaskList}){
  const {UpdateTodo, UpdateList} = React.useContext(TodoContext);
  const [boxDesp, setBoxDesp] = React.useState(false);
  const [boxDesp2, setBoxDesp2] = React.useState(false);
  const [textUpdate, setTextUpdate] = React.useState(categoria);
  function DisableBox(){
    setBoxDesp(true);
  }
  function HideBox(){
    setBoxDesp(false);
    setNewTask('');
    setNewIdTaskList(0);
  }

    return(
      <div className='lista'>
      <div className='bloqueGeneral'>
        <div className={`OcultarNew ${!boxDesp2 && "VisibleNew"}`}>
        <div className="bloqueGeneralCat">
          <div className='bloqueGeneralCatBlo'>
          <h3
            onClick={() => {
              setBoxDesp2(true);
            }}
          >{categoria}</h3>
          </div>
          <button onClick={onDelete}>
          <DeleteIcon/>
          </button>
        </div>
        </div>
        <div className={`OcultarNew ${boxDesp2 && "VisibleNew"}`}>
          <div className='bloqueGeneralEdit'>
          <form 
            onSubmit={(event) => {
              event.preventDefault();
              UpdateList({idCat, newText: textUpdate});
              setBoxDesp2(false);
            }}
          >
            <textarea
                value={textUpdate}
                onChange={(event) => {
                    setTextUpdate(event.target.value);
                  }}
            >
            </textarea>
            <div className="buttonsArea">
                <button
                    type="sutmit"
                    className="buttonSubmit"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="buttonCancelForm"
                    onClick={() => {
                        setBoxDesp2(false);
                        setTextUpdate(textUpdate);
                    }}
                >
                    Cancelar
                </button>
            </div>
          </form>
          </div>
        </div>
        <div className='bloqueGeneralNewTask'> 
          <div className={`OcultarNew ${!boxDesp && "VisibleNew"}`}>
            <button onClick={DisableBox}>+ Añade una tarjeta</button>
          </div>
          <div className={`OcultarNew ${boxDesp && "VisibleNew"}`}>
            <input 
                placeholder="Escribe una nueva tarea" 
                value={newTask}
                key={idCat}
                onChange={(event) => {
                  setNewTask(event.target.value);
                  setNewIdTaskList(idCat);
                }}
            />
            <button 
              className="Botton-add"
                onClick={function(event) {
                  addTodo(); 
                  HideBox();
                }}  
              >
                <span className="material-symbols-outlined">note_stack_add</span>
              </button>
              <button onClick={HideBox}>
                <i className="material-symbols-outlined">close</i>
              </button>
          </div>
        </div>
        <ol className='bloqueGeneralTodos'>
          {children}
        </ol>
      </div>
      </div>
    );
  }

  export { TodoList };