import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest14.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest14 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>Congratulations Seekers for completing all the missions in Finders Seekers. We hope that you had fun playing and gained a lot in the process.</h3>
        <h3>The winners of the Grand Prizes will be announced on July 8, 2022.</h3>
        <h3>We hope to see you again at the next events by PBI, and we also hope to see you joining us in the future.</h3>
        <h4>Thank You - PBI and Finders Seekers Team.</h4>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest14}>
        <Instruction />
      </div>
    </div>
  )
}

export default Quest14;
