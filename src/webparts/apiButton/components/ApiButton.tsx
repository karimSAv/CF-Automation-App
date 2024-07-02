import Form from './Form';
import NavBar from './NavBar';
import * as React from 'react';
import Header from './Header/Header';
import styles from './ApiButton.module.scss';
import { CFContextProvider } from '../context/CFContext';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import VerticalNavBar from './NavBar/VerticalNavBar';
import ProgressBar from './ProgressBar';
import { Toaster } from 'react-hot-toast';

const ApiButton = ({ context }: { context: WebPartContext }) => {

  return (
    <CFContextProvider httpClient={context.httpClient}>
      <section className={styles.apiButton}>
        <NavBar />
        {/* <Header />
        <Form /> */}
        <div style={{
          padding: "1rem",
          backgroundColor: "#f2f2f2",
          display: "flex",
          gap: "1rem",
        }}>
          <VerticalNavBar />
          <div style={{ width: "100%" }}>
            <ProgressBar />
            <Form />
          </div>
        </div>
      </section>
      <Toaster />
    </CFContextProvider>
  );
};

export default ApiButton;

