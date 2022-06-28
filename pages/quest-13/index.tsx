import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest13.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest13 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#13 Show Me Your Groove</h3>
        <div>This mission will test your reading skills and imagination!</div>
        <div>Rules: </div>
        <ol>
          <li>
            Access <a href="https://tinyurl.com/2p8m7e54">https://tinyurl.com/2p8m7e54</a>  to get the instructions
            of a dance routine and the background music.
          </li>
          <li>Follow the instructions step-by-step.</li>
          <li>If you think that you have understood the instructions, record yourself dancing according to the instructions.</li>
          <li>Save your video in MP4 format, and rename it to [Nickname]_ShowMeYourGroove. Make sure you put your registered nickname.</li>
          <li>Upload your video to the file uploader at <a href=" https://tinyurl.com/2p8m7e54 "> https://tinyurl.com/2p8m7e54 </a></li>
          <li>By uploading a proper video, you will have the chance of winning the highest vote from the committee and thus getting a +5 points.</li>
          <li>You will get the ticket immediately after you have uploaded your work.</li>
          <li>If you have any problem, contact the PIC through Whatsapp (Edward -
            <a href="https://api.whatsapp.com/send/?phone=6289502941841"> 089502941841</a>)
          </li>
        </ol>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest13}>
        <Instruction />
        <PassForm
          password="thinker"
          nextURL='/quest-14/'
          level={13}
          startMonth={7}
          startDate={6}
        />
      </div>
    </div>
  )
}

export default Quest13;
