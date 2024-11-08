import React from "react";
import "./EditTodoList.css"
import { TodoContext } from '../TodoContex';

function EditTodo ({idTodo, newtext}){
    const {UpdateTodo,
        setOpenModalTodo,
      } = React.useContext(TodoContext);
    const [textUpdate, setTextUpdate] = React.useState(newtext);
    return(
        <form 
            onSubmit={UpdateTodo}
        >
            <textarea
                value={textUpdate}
                onChange={(event) => {
                    setTextUpdate(event.target.value);
                  }}
            >
            </textarea>
            <div>
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
                        setOpenModalTodo(false);
                        setTextUpdate('');
                    }}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
}
function EditList ({idCat, newtext}){
    const {UpdateList, setOpenModalList} = React.useContext(TodoContext);
    const [textUpdate, setTextUpdate] = React.useState(newtext);
    return(
        <form 
            onSubmit={() => UpdateList({idCat,textUpdate})}
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
                        setOpenModalList(false);
                        setTextUpdate('');
                    }}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export {EditTodo, EditList};