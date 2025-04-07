import React, { useState, useEffect } from 'react';
import Newsletter from '../components/newsletter/Newsletter';
import styles from "./contact.module.css";


const Contact = () => {
  return (
    <>
    <article className={styles.contact}>
        <div className={styles.mig}>
            <h3>Vær velkommen til at skrive, hvis du har nogle spørgsmål til min rejse, <br /> eller hvis du har ideer til nye blogindlæg!</h3>
            <img src="Kinabilleder\Kinabillede55.jpg" alt="" />
        </div>
        <div className={styles.container}>
        <h1>Få notifikationer om nye bloginndlæg</h1>
           <Newsletter />
        </div>
    </article>
    </>
  );
};

export default Contact;