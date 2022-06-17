import React, { useState } from 'react';
import Router from 'next/router';
import styles from './PassForm.module.scss';

interface PassFormInterface {
  password: string,
  nextURL: string,
}

const PassForm = (props: PassFormInterface) => {
  const { password, nextURL } = props;
  const [showError, setShowError] = useState(false);

  const answerHandler = (e: any) => {
    e.preventDefault();
    const answerValue = e.target.answer.value;
    const answer = answerValue.trim().toLowerCase().replace(/\s+/g, "")
    if (answer !== password) {
      setShowError(true);
    } else {
      Router.push(nextURL);
    }
  }

  return (
    <form onSubmit={answerHandler} className={styles.passForm}>
      <label htmlFor="answer">Passcode</label>
      <input type="password" name='answer' placeholder='Passcode' />
      <button type="submit">Submit</button>
      {showError && <div className={styles.passForm__error}>Oops Wrong Passcode</div>}
    </form>
  );
}

export default PassForm;