import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest2.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest2 = () => {

  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#2 Down the Memory Lane</h3>
        <div className={instructionStyle.instructions__subtitle}>Instruction</div>
        <ol>
          <li>Go to your Instagram and search HMPS PBI Instagram Account: <strong>@hmpspbi_uaj</strong>.</li>
          <li>Find all the activities held by HMPS PBI from August 14, 2021 until May 31, 2022.</li>
          <li>Arrange all the activities from the oldest to the newest events in accordance to the dates of the events.</li>
          <li>Type your answers in Ms.word/Gdocs.</li>
          <li>
            Don't forget to name your file in the following format: <strong>Nickname_DownTheMemoryLane</strong>  (Note: Nickname as registered in Finders Seekers)
          </li>
          <li>Upload your work to
            <a href="https://tinyurl.com/3zx777d7">https://tinyurl.com/3zx777d7</a>
          </li>
          <li>You will get the ticket immediately after you have uploaded your work.</li>
          <li>If you have any problem, contact the PIC through Whatsapp (Aurelie -
            <a href="https://api.whatsapp.com/send/?phone=6289535888056"> 089535888056 </a>
            or Grace -
            <a href="https://api.whatsapp.com/send/?phone=6281292277252"> 081292277252</a>
            )
          </li>
        </ol>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest2}>
        <Instruction />
        <PassForm
          password="compose"
          nextURL='/quest-3/'
          level={2}
        />
      </div>
    </div>
  )
}

export default Quest2;
