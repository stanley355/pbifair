import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest5.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest5 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#5 Edu-Fields</h3>
        <div className={instructionStyle.instructions__subtitle}>Rules/ Guidelines:</div>
        <ol>
          <li>Open your Instagram and search <strong>@pbiuaj </strong> IG account.</li>
          <li>Find IGTV video of PBI in 60 minutes with Yoel Prokhorus.</li>
          <li>Watch the video and find at least 2 points about in what way learning in education can be applied in different fields.</li>
          <li>Type the information from the video you have watched in Ms.word/Gdocs. </li>
          <li>
            Save your file and name it with this format:
            <strong>Nickname_EDU-fields</strong>  (Note: Nickname as registered in Finders Seekers)
          </li>
          <li>
            Upload the file to <a href="https://tinyurl.com/3zjxx5ds">https://tinyurl.com/3zjxx5ds </a>.
          </li>
          <li>You will get the ticket immediately after you have uploaded your work.</li>
          <li>If you have any problem, contact the PIC through Whatsapp (Laura -
            <a href="https://api.whatsapp.com/send/?phone=62895330282668"> 0895330282668</a>)
          </li>
        </ol>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest5}>
        <Instruction />
        <PassForm
          password="grimace"
          nextURL='/quest-6/'
          level={5}
        />
      </div>
    </div>
  )
}

export default Quest5;
