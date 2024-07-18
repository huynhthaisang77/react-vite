import TodoData from './components/todo/todoData';
import TodoNew from './components/todo/todoNew';
import reactLogo from './assets/react.svg';
import './components/todo/todo.css';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React " },
    { id: 2, name: "Watching Youtube" }
  ])

  const hoidanit = "Eric";
  const age = 25;
  const data = {
    address: "BD",
    country: "VN"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`);
  }
  //{key: value}
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
          name={hoidanit}
          age={age}
          data={data}
          todoList={todoList}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
