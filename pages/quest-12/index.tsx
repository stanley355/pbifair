import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest12.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest12 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#12 Figure in the Picture</h3>
        <div>Hello Seekers,</div>
        <div>Welcome to the 12th Mission: <strong>Dear Lessons</strong> .</div>
        <ol>
          <li>Open your Instagram and go to @pbiuaj IG account.</li>
          <li>Go to the bio and click the link to access the 2021 Curriculum of the English Education Department of UNIKA Atma Jaya.</li>
          <li>Study the courses and their descriptions and then answer the questions which can be accessed through the following link:
            <a href="https://forms.gle/FRokPjxBE4BrN37g7 ">Link</a>
          </li>
          <li>After answering all the questions, click SUBMIT.</li>
          <li>You will get the ticket to go to the next mission immediately after you click SUBMIT.</li>
          <li>If you have any problem, contact the PIC through Whatsapp (Laura -
            <a href="https://api.whatsapp.com/send/?phone=62895330282668"> 0895330282668</a>)
          </li>
        </ol>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest12}>
        <Instruction />
        <PassForm
          password="present"
          nextURL='/quest-13/'
          level={12}
        />
      </div>
    </div>
  )
}

export default Quest12;
