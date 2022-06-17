import React, { useState } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Guideline from '../components/Guideline/Guideline';
import { addUser } from '../lib/api/addUser';
import styles from '../styles/pages/landing.module.scss';

const Home: NextPage = () => {
  const [showError, setShowError] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const usernameHandler = async (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    if (!username || !email) setShowError(true);
    else {
      const addToDatabase = await addUser(username, email);
      // setTimeout(() => Router.push("/quest-1"), 1000)
    }
  }

  const LandingForm = () => {
    return (
      <div className={styles.landing__form}>
        <form onSubmit={usernameHandler}>
          <label htmlFor="username">What's in a name?</label>
          <input type="text" name='username' placeholder='My name is ...' />
          <label htmlFor="email">What's in an email?</label>
          <input type="email" name='email' placeholder='My email is ...' />
          <button type="submit">Let's Go</button>
          {showError && <div className={styles.landing__form__error}>Username and email can't be empty</div>}
        </form>
        <p>* *You can always see the guideline of the game on top right of your screen</p>
      </div>
    )
  }

  const FrontPage = () => {
    return (
      <div className={styles.landing__front}>
        <Guideline />
        {/* <div className={styles.landing__front__main}>
          <div className={styles.landing__front__question}>Seekers, are you ready to go???</div>
          <button className={styles.landing__front__cta} onClick={() => setShowForm(true)}>Start</button>
          <div className={styles.landing__front__note}>* You can always see the guideline of the game on top right of your screen</div>
        </div> */}
      </div>
    );
  }

  return (
    <div className="container">
      <div className={styles.landing}>
        <h1>Finders Seekers</h1>
        <FrontPage />
      </div>
    </div>
  )
}

export default Home
