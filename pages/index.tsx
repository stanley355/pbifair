import React, { useState } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';

import Guideline from '../components/Guideline/Guideline';
import { addUser } from '../lib/api/addUser';
import { createCookie } from '../utils/useCookie';
import { useHour } from '../utils/useHour';
import styles from '../styles/pages/landing.module.scss';

const Home: NextPage = () => {
  const [showError, setShowError] = useState(false);
  const [showTimeError, setShowTimeError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const correctHour = useHour();

  const usernameHandler = async (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    if (correctHour) {
      if (!username || !email) setShowError(true);
      else {
        setHasSubmitted(true);
        const addToDatabase = await addUser(username, email);

        if (addToDatabase) {
          const cookieData = {
            name: username,
            email: email,
            level: 0,
          }

          createCookie(cookieData);
          Router.push("/quest-1");
        } else {
          alert("Something wrong, please try again");
          setHasSubmitted(false)
        }
      }
    } else {
      setShowTimeError(true);
    }
  }

  const LandingForm = () => {
    return (
      <div className={styles.landing__form}>
        <form onSubmit={usernameHandler}>
          <label htmlFor="username">Your name?</label>
          <input type="text" name='username' placeholder='My name is ...' />
          <label htmlFor="email">Your current email?</label>
          <input type="email" name='email' placeholder='My email is ...' />
          <button type="submit">{hasSubmitted ? "Loading..." : "Let's Go"}</button>
          {showError && <div className={styles.landing__form__error}>Username and email can't be empty</div>}
          {showTimeError && <div className={styles.landing__form__error}>The Game will start on June 30 from 12 AM to 6 PM</div>}
        </form>
        <p>* *You can always see the guideline of the game on top right of your screen</p>
      </div>
    )
  }

  const FrontPage = () => {
    return (
      <div className={styles.landing__front}>
        <Guideline />
        <div className={styles.landing__front__main}>
          <div className={styles.landing__front__question}>Seekers, are you ready to go???</div>
          <button className={styles.landing__front__cta} onClick={() => setShowForm(true)}>Start</button>
          <div className={styles.landing__front__note}>* You can always see the guideline of the game on top right of your screen</div>
          <div className={styles.landing__front__note}>* Contact Person: Laura Patricia <a href="https://api.whatsapp.com/send/?phone=62895330282668"> 0895330282668</a></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className={styles.landing}>
        <h1>Finders Seekers</h1>
        {showForm ? <LandingForm /> : <FrontPage />}
      </div>
    </div>
  )
}

export default Home;
