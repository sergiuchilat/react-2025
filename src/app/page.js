//import styles from "./page.module.css";
import React from 'react';
import Icon from '@mdi/react';
//import { mdiAccount, mdiBlockHelper } from '@mdi/js';
import TodoAdd from '../components/todo/TodoAdd';
import TodoList from '../components/todo/TodoList';
import NavBar from '../components/layout/NavBar';
import Footer from '@/components/layout/Footer';


export default function Home() {
  return (
    <>
      <NavBar/>
      <TodoAdd />
      <TodoList />
      <Footer/>
    </>
  );
  
}
