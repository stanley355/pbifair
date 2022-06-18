import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest4.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest4 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#4 Tongue Twister</h3>
        <div className={instructionStyle.instructions__subtitle}>Rules/ Guidelines:</div>
        <ol>
          <li>Make a video of you reading these sentence:
            <strong> What would a woodchuck chuck if a woodchuck would chuck wood?</strong>
          </li>
          <li>Show your face and speak clearly.</li>
          <li>You can use any background that you like.</li>
          <li>Do not add any offensive words or sentences (regarding culture, religion, race, etc.) to the video.</li>
          <li>
            You can watch the sample video which is available at this link <a href="https://tinyurl.com/3u45fn27">https://tinyurl.com/3u45fn27</a>
          </li>
          <li>
            Save your video in MP4, and rename your file as “Nickname_Tonguetwister”. Make sure that you put the nickname you have registered.
          </li>
          <li>
            Upload your video to <a href="https://tinyurl.com/3u45fn27">https://tinyurl.com/3u45fn27</a>.
          </li>
          <li>You will get the ticket immediately after you have uploaded your work.</li>
          <li>If you have any problem, contact the PIC through Whatsapp (Edward - 089502941841 and Aliana - 082197790811)</li>
          <li>Your video will be evaluated by the committee to consider whether you are eligible for the chance of winning daily chances, so make sure that you upload a proper video!</li>
          <li>By uploading your video, you will be given the ticket to progress to the next level. </li>
          <li>By uploading a proper video, you will have a chance of winning the highest vote from the committee and thus getting a +5 points.</li>
          <li>By uploading the video to the link above, you hereby agree that the committees are allowed to share your video in any social media platform that PBI UAJ owns.</li>
          <li>Good Luck and Have Fun</li>
        </ol>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest4}>
        <Instruction />
        <PassForm
          password="snuggle"
          nextURL='/quest-5/'
          level={4}
        />
      </div>
    </div>
  )
}

export default Quest4;
