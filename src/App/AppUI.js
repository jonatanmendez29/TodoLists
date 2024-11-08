import './App.css';
import React from 'react';
import { TodoTitulo } from '../TodoTitulo';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../List_Task/TodoList';
import { TodoItem} from '../List_Task/TodoItem';
import { CreateList } from '../List_Task/CreateList';
import { TodosLoading } from '../TodosLoading';
import { TodosError} from '../TodosError';
import { EmtyTodos} from '../EmtyTodos';
import { TodoContext } from '../TodoContex';

function AppUi(){
  const {distinct,
    newTask,
    setNewTask,
    newIdTaskList,
    setNewIdTaskList,
    addTodo,
    deleteList,
    searchedTodos,
    completeTodo,
    uncompleteTodo,
    deleteTodo,
    saveCategoria,
    loading,
    error,
    UpdateList,
    UpdateTodo,
  } = React.useContext(TodoContext);
return (
    <React.Fragment>
      <div className='container'>
        <p className='item-head'>Tracking de actividades</p>
        <div className='item-task'>
          <TodoSearch />
              <div className='flexTextCont'>
              {loading && <TodosLoading/>}
              {error && <TodosError/>}
              {(!loading && distinct.length === 0) && <EmtyTodos/>}
              {(!loading && distinct.length > 0) 
                  && distinct.map(categoria => (
                      <TodoList 
                          key={categoria.idCat}
                          categoria={categoria.catDes}
                          idCat={categoria.idCat}
                          newTask={newTask}
                          setNewTask={setNewTask}
                          newIdTaskList={newIdTaskList}
                          setNewIdTaskList={setNewIdTaskList}
                          addTodo={() => addTodo()}
                          onDelete={() => deleteList(categoria.idCat)}
                      >
                      {searchedTodos.filter(
                          todo => (todo.categ === categoria.idCat)).map(
                              todo => (
                                  <TodoItem key={todo.id} 
                                      text={todo.text} 
                                      completed={todo.completed}
                                      idItem={todo.id}
                                      onComplete={() => completeTodo(todo.id)}
                                      onDelete={() => deleteTodo(todo.id)}
                                      uncompleteTodo={() => uncompleteTodo(todo.id)}
                                  />
                              )
                          )
                      }
                      </TodoList>)
                      )
              }
              {(!loading && distinct.length>0)
                  && <div>
                  <CreateList
                      distinct ={distinct}
                      setDistinct ={saveCategoria}
                  />
                  </div>
              }
              </div>
        </div>
        <div className='item-resumen'>
          <TodoTitulo/>
        </div>
     </div>
    </React.Fragment>
);
}

export {AppUi};