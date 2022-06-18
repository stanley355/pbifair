import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest3.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest3 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#3 Catch the Glitch</h3>
        <div className={instructionStyle.instructions__subtitle}>Rules/ Guidelines:</div>
        <ol>
          <li>Find the misspelled words in each of the sentences below.</li>
          <li>Fix the misspelled letter of the misspelled words.</li>
          <li>Arrange all the corrected letters from no. 1 to no. 7 to form a word.</li>
          <li>Enter this word as your ticket to continue to the next stage.</li>
        </ol>

        <div className={instructionStyle.instructions__subtitle}>Sentences:</div>
        <ol>
          <li>Day apter day</li>
          <li>Full the robe. (Pull)</li>
          <li>They are feeding the lamp (Lamb)</li>
          <li>It seems everything is vair</li>
          <li>Weter bottle</li>
          <li>FIVE STAGES OF GREEF </li>
          <li>Good Mowning </li>
        </ol>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest3}>
        <Instruction />
        <PassForm
          password="fpbfair"
          nextURL='/quest-4/'
          level={3}
        />
      </div>
    </div>
  )
}

export default Quest3;
