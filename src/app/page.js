//import styles from "./page.module.css";
import React from 'react';
import Icon from '@mdi/react';
//import { mdiAccount, mdiBlockHelper } from '@mdi/js';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';


export default function Home() {
  return (
    <>
      <NavBar/>
      <TodoAdd />
      <TodoList />
    </>
  );
  
}
