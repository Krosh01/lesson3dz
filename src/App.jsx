import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import store from './redux';
import { addTodo, deleteTodo, importantTodo, changeTodo } from './redux/redusers/todo';

function App() {
  const dispatch = useDispatch()
  const todos = useSelector((store) => store.todos.todos)


  const [todo , setTodo] = useState("")
  const [changetodolist , setchangeTodolist] = useState("")
  
  return (
    <div className="App">
        <div>
          <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text"/>
          <button type='button' onClick={() => {dispatch(addTodo(todo))
          setTodo("")
          }}>ADD</button>
          <br /> 

          <input onChange={(e) => setchangeTodolist(e.target.value)} value={changetodolist}  type="text" /> 
          <button type='button' style={{margin:'0 40px'}} onClick={() => {dispatch(changeTodo(changetodolist))
              // setchangeTodolist(item.title)
              console.log('changed');
              }} >Change</button>


          <div>
            <input type="search"/>
            <button>FIND</button>
            {/* <button type='button' onClick={() => dispatch(importantTodo(item.id))}>important</button> */}
          </div>
        </div>
        <ul>
          {
            todos.map((item) => (
              
              <li style={{margin: '20px 0', color: item.isImportant ? 'red' : ''} }  key={item.id}>{item.title} 
              <button type='button' style={{margin:'0 40px'}} onClick={() => {dispatch(deleteTodo(item.id))}}>delete</button> 
              <button type='button' onClick={() => dispatch(importantTodo(item.id))}>important</button>
              <button type='button' style={{margin:'0 40px'}} onClick={() => {
              setchangeTodolist(item.title)
              console.log('changed');
              }} >Change</button>
                </li>
            ))
          }
        </ul>
    </div>
  );
}

export default App;
