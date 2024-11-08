import React from "react";
import './EmtyTodos.css';
import { TodoContext } from "../TodoContex";

function EmtyTodos () {
    const {saveCategoria} = React.useContext(TodoContext);

    const [newList, setNewList] = React.useState('');
    function AnadeLista(){
        const newLista = [{idCat: 1, catDes: newList}];
        saveCategoria(newLista); 
    }
    return(
        <div className="flexEmty">
            <div>
                <p>¡Crea tu primera lista!</p>
            </div>
            <div className='addListAction-Emty'>
                <textarea 
                    placeholder='Escribe el nombre de tu primera lista'
                    maxLength={50}
                    value={newList}
                    onChange={(event) => {
                        setNewList(event.target.value);
                    }}
                ></textarea>
                <div>
                    <button 
                        className='addListAction-EmtyButAdd'
                        onClick={AnadeLista}
                    >Añadir lista</button>
                </div>
            </div>
        </div>
    );
}

 export {EmtyTodos};