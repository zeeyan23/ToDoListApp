import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import ShowList from './components/ShowList';

function App() {

  const [toDo,setToDo]=useState<string[]>([]);

  const addText=(todoText:string)=>{

    setToDo((prevToDo) => [todoText, ...prevToDo]);
  }
  return (
    <>
      <Todo onAddToDo={addText}/>
      <ShowList task={toDo}/>
    </>
  );
}

export default App;
