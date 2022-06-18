import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest1.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest1 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#1 Who's the Alumni</h3>
        <div className={instructionStyle.instructions__subtitle}>Instruction</div>
        <ul>
          <li>Open your Instagram and search <strong>@pbiuaj</strong> IG account.</li>
          <li>
            <div>Find IGTV videos of PBI in 60 minutes with one of the following guests:</div>
            <ol>
              <li>Stella Novelina</li>
              <li>Amiyandra</li>
              <li>Tenny Febe</li>
            </ol>
          </li>
          <li>
            Watch one out of three videos and find at least two points
            about in what way learning in PBI had prepared the alumni to do their current job.
          </li>
          <li>Type the information from one of those alumni in Ms.word/Gdocs.</li>
          <li>
            Save your file and name it with this format:
            <strong>Nickname_whosthealumni</strong> (Note: Nickname as registered in Finders Seekers)
          </li>
          <li>Upload the file to this link: 
            <a href="https://tinyurl.com/2p8fnp8e">https://tinyurl.com/2p8fnp8e</a>
          </li>
          <li>You will get the ticket immediately after you have uploaded your work.</li>
          <li>If you have any problem, contact the PIC through Whatsapp (Laura - 0895330282668)</li>
        </ul>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest1}>
        <Instruction />
        <PassForm
          password="replace"
          nextURL='/quest-2/'
          level={1}
        />
      </div>
    </div>
  )
}

export default Quest1;
