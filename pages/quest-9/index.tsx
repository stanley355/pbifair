import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest9.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest9 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#9 Who's the Lecturer</h3>
        <div>Hello Seekers,</div>
        <div>Welcome to the 9th mission: Who's the Lecturer?</div>
        <div>In this mission, you will watch five videos of the lecturers of the English Education Department of UNIKA Atma Jaya when delivering a lesson. Afterwards, you must answer several questions about the videos.</div>
        <div>The videos and the questions can be accessed through the following link:
          <a href="https://forms.gle/2q3VTo2DxhM4YbXn6">https://forms.gle/2q3VTo2DxhM4YbXn6</a>
        </div>
        <div>You will get the ticket to go to the next mission immediately after submitting your answers.</div>
        <div>If you have any problem, contact the PIC through Whatsapp (Laura - 0895330282668)</div>
        <div>Good luck!^^</div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest9}>
        <Instruction />
        <PassForm
          password="missile"
          nextURL='/quest-10/'
          level={9}
        />
      </div>
    </div>
  )
}

export default Quest9;
