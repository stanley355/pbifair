import React, { useState } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Guideline from '../components/Guideline/Guideline';
import useResponsive from '../utils/useResponsive';

import styles from '../styles/pages/landing.module.scss';

const Home: NextPage = () => {
  const [showError, setShowError] = useState(false);
  const [hasName, setHasName] = useState(false);

  const usernameHandler = (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
    if (!username) setShowError(true);
    else {
      setHasName(true);
      setTimeout(() => Router.push("/quest-1"), 1000)
    }
  }

  const LandingForm = () => {
    return (
      <div>
        <form onSubmit={usernameHandler}>
          <label htmlFor="username">What's in a name?</label>
          <input type="text" name='username' placeholder='My name is ...' />
          <button type="submit">Let's Go</button>
          {showError && <div className={styles.landing__error}>Please tell me before you go</div>}
        </form>
        <p>* To see the guideline of this game, it's always on the top right of the screen</p>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.landing}>
        <h1>Finders Seekers</h1>
        <Guideline />
      </div>
    </div>
  )
}

export default Home
