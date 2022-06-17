import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest9.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest9 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>Who’s the Lecturer</h3>
        <div className={instructionStyle.instructions__subtitle}>Rules and Guidelines:</div>
        <div>Committee hasn't prepared the instruction yet</div>
        <div>Please go to /admin to see if your level has updated</div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest4}>
        <Instruction />
        {/* <PassForm
          password="present"
          nextURL='/quest-10/'
          level={9}
        /> */}
      </div>
    </div>
  )
}

export default Quest9;
