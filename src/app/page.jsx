//import styles from "./page.module.css";
import React from 'react';

import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import TodoList from '@/components/todo/TodoList';


export default function Home() {

  const todoList = [
    {
        id: 1,
        text: 'Sa nu uit sa maninc',
        completed: false,
        color: 'red'
    },
    {
        id: 2,
        text: 'Sa nu fac temele de acasa la web I',
        completed: false,
        color: 'red'
    }
]

  return (
    <>
      <NavBar/>
      <h1>This is a Todo web application</h1>
      <TodoList todoList={todoList} canEdit={false} />  
      <p>
        This is a simple Todo app made with React.
      </p>
      <Footer/>
    </>
  );
  
}
