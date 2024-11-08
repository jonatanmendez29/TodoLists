import React from 'react';
import './TodoItem.css';
import { CompleteIcon } from '.././Icons/CompleteIcon';
import {DeleteIcon} from '../Icons/DeleteIcon';
import { TodoContext } from '../TodoContex';

function TodoItem({ text, completed, idItem, onComplete, onDelete, uncompleteTodo }) {
  const {UpdateTodo, UpdateList} = React.useContext(TodoContext);
  const [newText, setNewText] = React.useState(text);
  const [disBox, setDisBox] = React.useState(false);

  const estado= () =>{
    if(completed){
      return uncompleteTodo();
    } else {
      return onComplete();
    }
  }
    return(
      <li className="gridTask">
        <div className='gridTaskButtons'>
          <button 
          className={`buttonDone ${completed && "buttonDone-complete"}`}
          onClick={estado}
          >
            <CompleteIcon/>
          </button>
          <button 
          className="Botton-del"
          onClick={onDelete}
          >
           <DeleteIcon/>
          </button>
        </div>
        <div className='gridTaskText'>
          <div className={`OcultarNew ${!disBox && "VisibleNew"}`}>
            <div 
              className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}
              onClick={() => {
                setDisBox(true);
              }}
            >
              <p>{text}</p>
            </div>
          </div>
          <div className={`OcultarNew ${disBox && "VisibleNew"}`}>
            <div className='bloqueGeneralEdit'>
              <form 
                onSubmit={(event) => {
                event.preventDefault();
                UpdateTodo({idTask: idItem, newText: newText});
                setDisBox(false);
              }}
              >
                <textarea
                    value={newText}
                    onChange={(event) => {
                      setNewText(event.target.value);
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
                      setDisBox(false);
                      setNewText(newText);
                    }}
                  >
                  Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </li>
    );
  }
  
  export { TodoItem };