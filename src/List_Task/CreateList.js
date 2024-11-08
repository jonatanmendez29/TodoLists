import React from 'react';
import './CreateList.css';
import {CancelIcon} from '.././Icons/CancelIcon'

function CreateList({distinct, setDistinct}){
    const [newList, setNewList] = React.useState('');
    const [boxDesp, setBoxDesp] = React.useState(false);
    function DisableBox(){
        setBoxDesp(true);
    }
    function HideBox(){
        setBoxDesp(false);
        setNewList('');
    }
    function AnadeLista(){
        let newLista;
        if(Array.isArray(distinct) && distinct.length > 0){
            if(newList !== ''){
                var max_tama = Math.max(...distinct.map(i => i.idCat))+1;
                newLista = [
                    ...distinct,
                    {idCat: max_tama, catDes: newList}
                ];
                setDistinct(newLista);
            } 
        } else {
            newLista = [{idCat: 1, catDes: newList}];
            setDistinct(newLista); 
        }
        localStorage.setItem('LISTAS_V1', JSON.stringify(newLista));
        HideBox();
    }
    return(
        <div className='flexNewList'>
            <div className={`addList ${boxDesp && "addListHide"}`}>
                <button
                    onClick={DisableBox}
                > + Añade lista</button>
            </div>
            <div className={`addListAction ${boxDesp && "addListActionDisable"}`}>
                <textarea 
                    placeholder='Escribe el nombre de la nueva lista'
                    maxLength={50}
                    value={newList}
                    onChange={(event) => {
                        setNewList(event.target.value);
                    }}
                ></textarea>
                <div>
                    <button 
                        className='addListActionButAdd'
                        onClick={AnadeLista}
                    >Añadir lista</button>
                    <button 
                        className='addListActionButCans'
                        onClick={HideBox}
                    >
                        <CancelIcon/>
                    </button>
                </div>
            </div>
        </div>
    );
}
export {CreateList};