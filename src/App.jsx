import TodoData from './components/todo/todoData';
import TodoNew from './components/todo/todoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import './components/todo/todo.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React " },
    // { id: 2, name: "Watching Youtube" }
  ]);


  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000),
      name: name
    };

    setTodoList([...todoList, newTodo])
  };

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo);
  }

  //{key: value}
  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        {todoList.length > 0 ?
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
          :
          <div className='todo-image'>
            <img src={reactLogo} className='logo' />
          </div>
        }
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default App
