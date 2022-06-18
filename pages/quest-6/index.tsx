import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest6.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest6 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#6 Draw Me</h3>
        <div className={instructionStyle.instructions__subtitle}>Rules/ Guidelines:</div>
        <div>
          Committee hasn't given the instruction yet, 
          continue to next step with 'instruction' as the password
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest4}>
        <Instruction />
        <PassForm
          password="instruction"
          nextURL='/quest-7/'
          level={6}
        />
      </div>
    </div>
  )
}

export default Quest6;
