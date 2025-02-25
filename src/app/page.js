//import styles from "./page.module.css";
import React from 'react';

import NavBar from '../components/layout/NavBar';
import Footer from '@/components/layout/Footer';


export default function Home() {
  return (
    <>
      <NavBar/>
      <h1>This is a Todo web application</h1>
      <p>
        This is a simple Todo app made with React.
      </p>
      <Footer/>
    </>
  );
  
}
