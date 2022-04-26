import React, { useState } from 'react';
import Router from 'next/router';

import styles from './quest2.module.scss';

const Quest2 = () => {
  const [showError, setShowError] = useState(false);
  const [hasAnswer, setHasAnswer] = useState(false);

  const answerOptions = [{ title: "Ulyssess", value: "ans1" }, { title: "The Road not Taken", value: "ans2" }, { title: "Do not go gentle into that Good Night", value: "ans3" }]

  const answerHandler = (e: any) => {
    e.preventDefault();

    const {radioAnswer} = e.target;
    if (radioAnswer.value !== "ans1") setShowError(true);
    else {
      setHasAnswer(true);
      setTimeout(() => Router.push("/quest-3"), 1000)
    }
  }
  const QuestionForm = () => {
    return (
      <form onSubmit={answerHandler}>
        <div className={styles.quest2__question}>"To strive, to seek, and not to yield" is the last line of a poem called...</div>
        {answerOptions.map((option) =>
          <div className={styles.quest2__inputContainer}>
            <input type="radio" name="radioAnswer" value={option.value}/>
            <label htmlFor={option.value}>{option.title}</label>
          </div>
        )}
        <button type="submit">Check</button>
        {showError && <div className={styles.quest2__error}>C'mon it's a famous poem</div>}
      </form>
    )
  }
  return (
    <div className="container">
      <div className={styles.quest2}>
        {hasAnswer ?
          <div>
            <div>As man we shall not yield to circumstances</div>
            <div>Redirecting...</div>
          </div> : <QuestionForm />}
      </div>
    </div>
  )
}

export default Quest2;
