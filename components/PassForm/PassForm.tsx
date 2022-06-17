import React, { useState } from 'react';
import Router from 'next/router';
import { readCookie, updateCookie } from '../../utils/useCookie';
import { updateUser } from '../../lib/api/updateUser';
import styles from './PassForm.module.scss';


interface PassFormInterface {
  password: string,
  nextURL: string,
  level: number,
}

const PassForm = (props: PassFormInterface) => {
  const { password, nextURL, level } = props;
  const [showError, setShowError] = useState(false);

  const answerHandler = async (e: any) => {
    e.preventDefault();
    const answerValue = e.target.answer.value;
    const answer = answerValue.trim().toLowerCase().replace(/\s+/g, "")

    if (answer !== password) {
      setShowError(true);
    } else {
      const cookieData = readCookie();
      const update = await updateUser(cookieData.name, level);

      if (update && update.id) {
        updateCookie(level);
        Router.push(nextURL);
      }
    }
  }

  return (
    <form onSubmit={answerHandler} className={styles.passForm}>
      <label htmlFor="answer">Ticket</label>
      <input type="password" name='answer' placeholder='ticket' />
      <button type="submit">Submit</button>
      {showError && <div className={styles.passForm__error}>Oops Wrong Passcode</div>}
    </form>
  );
}

export default PassForm;