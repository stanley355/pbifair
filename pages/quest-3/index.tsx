import React, { useState } from 'react';
import Router from 'next/router';

import styles from './quest3.module.scss';

const Quest3 = () => {
  const [showError, setShowError] = useState(false);
  const [hasAnswer, setHasAnswer] = useState(false);

  const answerOptions = [
    { title: "Author of Christmas Carol", value: "ans1" },
    { title: "Author of Sonnet", value: "ans2" },
    { title: "Author of Murder at the Orient Express", value: "ans3" }
  ]

  const answerHandler = (e: any) => {
    e.preventDefault();

    const { radioAnswer } = e.target;
    if (radioAnswer.value !== "ans3") setShowError(true);
    else {
      setHasAnswer(true);
    }
  }
  const QuestionForm = () => {
    return (
      <form onSubmit={answerHandler}>
        <div className={styles.quest3__question}>"Three Blind Mice and Other Stories" was written by...</div>
        {answerOptions.map((option) =>
          <div className={styles.quest3__inputContainer}>
            <input type="radio" name="radioAnswer" value={option.value} />
            <label htmlFor={option.value}>{option.title}</label>
          </div>
        )}
        <button type="submit">Check</button>
        {showError && <div className={styles.quest3__error}>Are u sure?</div>}
      </form>
    )
  }
  return (
    <div className="container">
      <div className={styles.quest3}>
        {hasAnswer ?
          <div>
            <div>This is the end of your beginning</div>
          </div> : <QuestionForm />}
      </div>
    </div>
  )
}

export default Quest3;
