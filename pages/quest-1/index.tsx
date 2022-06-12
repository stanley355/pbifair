import React, { useState } from 'react';
import Router from 'next/router';

import styles from './quest1.module.scss';

const Quest1 = () => {
  const [showError, setShowError] = useState(false);
  const [hasAnswer, setHasAnswer] = useState(false);

  const answerHandler = (e: any) => {
    e.preventDefault();
    const answerValue = e.target.answer.value;
    const answer = answerValue.toLowerCase().replace(/\s+/g, "")
    if (answer !== "yanti") setShowError(true);
    else {
      setHasAnswer(true);
      setTimeout(() => Router.push("/quest-2"), 1000)
    }
  }
  const QuestionForm = () => {
    return (
      <form onSubmit={answerHandler}>
        <label htmlFor="answer">Bu Lany Hidajat (Head of PBI department) went to Delaware College (USA) with another PBI lecturer whose name is?</label>
        <input type="text" name='answer' placeholder='The name ...' />
        <button type="submit">Check</button>
        {showError && <div className={styles.quest1__error}>Her name only has one word</div>}
      </form>
    )
  }
  return (
    <div className="container">
      <div className={styles.quest1}>
        {/* {hasAnswer ?
          <div>
            <div>Yep, they are really old friends</div>
            <div>Redirecting...</div>
          </div> : <QuestionForm />} */}
          <h1>Please go to /admin to check if you exist</h1>
      </div>
    </div>
  )
}

export default Quest1;
