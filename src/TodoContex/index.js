import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}) {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
  const {item: distinct, saveItem: saveCategoria, loading: catLoading, error: catError} = useLocalStorage('LISTAS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');
  const [newTask, setNewTask] = React.useState('');
  const [newIdTaskList, setNewIdTaskList] = React.useState(0);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    } 
  );
  
  const completeTodo = (idTask) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === idTask
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const uncompleteTodo = (idTask) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === idTask
    );
    newTodos[todoIndex].completed = false;
    saveTodos(newTodos);
  }
  const deleteTodo = (idTask) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.filter(
      (todo) => todo.id !== idTask
    );
    saveTodos(todoIndex); 
  }
const deleteList = (IdList) => {
    const newList = distinct.filter(
      (todo) => todo.idCat !== IdList
    );
    saveCategoria(newList); 
    const newTodos = todos.filter(
      (todo) => todo.categ !== IdList
    );
    saveTodos(newTodos);
}
const UpdateList = ({idCat, newText}) => {
  console.log(newText);
    if(newText !== ''){
      const newList = [...distinct];
      const listIndex = newList.findIndex(
        (categoria) => categoria.idCat === idCat
      );
      newList[listIndex].catDes = newText;
      saveCategoria(newList);
    }
}
const UpdateTodo = ({idTask, newText}) => {
  if(newText !== ''){
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === idTask
    );
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  }
}
  const addTodo = () => {
    let newTodos;
    if(Array.isArray(todos) && todos.length > 0){
      const max_tama = Math.max(...todos.map(i => i.id))+1;
      newTodos = [...todos,
        { id: max_tama, categ: newIdTaskList, text: newTask, completed: false}
      ];
      saveTodos(newTodos);
    } else {
      newTodos = [{ id: 1, categ: newIdTaskList, text: newTask, completed: false}];
      saveTodos(newTodos);
    }
  }
    return(
        <TodoContext.Provider value={{
            searchValue,
            setSearchValue,
            distinct,
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
            completedTodos,
            totalTodos,
            loading,
            error,
            UpdateList,
            UpdateTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}
export {TodoContext, TodoProvider};