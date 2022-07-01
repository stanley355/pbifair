import React, { useState } from 'react';
import Router from 'next/router';
import { readCookie, updateCookie } from '../../utils/useCookie';
import { useHour } from '../../utils/useHour';
import { updateUser } from '../../lib/api/updateUser';
import styles from './PassForm.module.scss';

interface PassFormInterface {
  password: string,
  nextURL: string,
  level: number,
  startDate: number,
}

const PassForm = (props: PassFormInterface) => {
  const { password, nextURL, level, startDate } = props;
  const [showError, setShowError] = useState(false);
  const [showTimeError, setShowTimeError] = useState(false);

  const getCorrectDate = () => {
    const date = new Date();
    if (date.getDate() >= startDate) {
      return true
    }
    return false;
  }

  const correctHour = useHour();
  const correctDate = getCorrectDate();

  const answerHandler = async (e: any) => {
    e.preventDefault();
    const answerValue = e.target.answer.value;
    const answer = answerValue.trim().toLowerCase().replace(/\s+/g, "");

    if (correctDate && correctHour) {
      if (answer !== password) {
        setShowError(true);
      } else {
        const cookieData = readCookie();
        const update = await updateUser(cookieData.name, level);

        if (update && update.id) {
          updateCookie(level);
          Router.push(nextURL);
        } else {
          alert("Something went wrong, please try again");
        }
      }
    } else {
      setShowTimeError(true);
    }
  }

  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <form onSubmit={answerHandler} className={styles.passForm}>
      <label htmlFor="answer">Ticket</label>
      <input type="password" name='answer' placeholder='Enter the ticket...' />
      <button type="submit">Submit</button>
      {showError && <div className={styles.passForm__error}>Oops Wrong Passcode</div>}
      {showTimeError && <div className={styles.passForm__error}>The Game will start by July {startDate > new Date().getDate() ? startDate : new Date().getDate()} from 12 AM to 6 PM</div>}
    </form>
  );
}

export default PassForm;