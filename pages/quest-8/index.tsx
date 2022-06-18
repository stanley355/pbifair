import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest8.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest8 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#8 Figure in the Picture</h3>
        <div className={instructionStyle.instructions__subtitle}>Rules and Guidelines:</div>
        <ol>
          <li>Find a picture that you think represents a teacher.</li>
          <li>Think of the reason why the selected picture represents a teacher.</li>
          <li>Type your reason in a word document along with your picture in the same word file.</li>
          <li>Save your file as a word document, and rename it as [Nickname]_FigureinthePicture. Make sure that you put in your registered nickname.</li>
          <li>Upload your work to <a href="https://tinyurl.com/3n652vzt ">https://tinyurl.com/3n652vzt </a> </li>
          <li>Your work will be evaluated by the committee to consider whether you are eligible for the chance of winning daily prizes, and  so make sure that you upload a proper work.</li>
          <li>If your work has the highest vote from the committee, you will have a chance of getting a +5 points.</li>
          <li>You will get the ticket immediately after you have uploaded your work.</li>
          <li>If you have any problem, contact the PIC through Whatsapp (Edward - 089502941841)</li>
        </ol>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest4}>
        <Instruction />
        <PassForm
          password="present"
          nextURL='/quest-9/'
          level={8}
        />
      </div>
    </div>
  )
}

export default Quest8;
