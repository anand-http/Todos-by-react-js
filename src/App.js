import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import './App.css';
import React, { useState, useEffect } from 'react';
import Addtodo from './Components/Addtodo';

import About from './Components/About';
import ContactUs from './Components/ContactUs';




import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todoo) => {
    setTodos(todos.filter((e) => {
      return e !== todoo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos))

  }

  const addTodo = (title, description) => {
    console.log('i am adding this todo', title, description)
    let Sno;
    if (todos.length === 0) {
      Sno = 1;
    } else {
      Sno = todos[todos.length - 1].Sno + 1;
    }
    const MyTodo = {
      Sno: Sno,
      title: title,
      description: description
    }
    setTodos([...todos, MyTodo]);
    console.log(MyTodo);
  }

  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])




  return (

    
    <div className="App">
          <BrowserRouter>
          <Header title="MyToDoList" searchBar={true} />
          <Routes>
            <Route exact path='/' element={<><Addtodo addTodo={addTodo} /> <Todos todos={todos} onDelete={onDelete} /></> }>
            </Route>
          

            <Route exact path="/about" element={<About />} ></Route>
            <Route exact path="/contactus" element={<ContactUs/>} />

          </Routes>
          <Footer />
      </BrowserRouter>
        </div>
    
  );
}

export default App;
