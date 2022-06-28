import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest6.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest6 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#6 Draw Me</h3>
        <div className={instructionStyle.instructions__subtitle}>Instructions:</div>

        <ol>
          <li>
            <div>Read this step-by-step instruction of the picture that you must draw:</div>
            <ol>
              <li>Draw a big triangle</li>
              <li>Under the triangle draw a large square</li>
              <li>Inside the upper half-square draw two small circles on the left and right side</li>
              <li>In the middle of the bottom of the square, draw a medium rectangle vertically.</li>
              <li>Inside the rectangle draw a tiny circle in the middle left</li>
            </ol>
          </li>
          <li>You can draw the picture using any program or application that you want, or you can draw the picture on paper. However, make sure that you submit the picture in <strong>.JPEG</strong> format.</li>
          <li>
            Save your picture in <strong>.JPEG</strong> format and rename it to <strong>Nickname_DrawMe</strong>. Make sure that the nickname is your registered nickname
          </li>
          <li>
            Upload your file to <a href="https://tinyurl.com/3wex3va6">https://tinyurl.com/3wex3va6</a> . Your work will be evaluated by the committee to consider whether you are eligible for the chance of winning daily prizes, and  so make sure that you upload a proper work.
          </li>
          <li>If your work has the highest vote from the committee, you will have the chance of getting a +5 points.</li>
          <li>You will get the ticket immediately after you have uploaded your work.</li>
          <li>If you have any problem, contact the PIC through Whatsapp (Aliana -
            <a href="https://api.whatsapp.com/send/?phone=6282197790811"> 082197790811 </a>
            and Edward -
            <a href="https://api.whatsapp.com/send/?phone=62889502941841"> 089502941841 </a>
            )
          </li>
        </ol>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest6}>
        <Instruction />
        <PassForm
          password="indulge"
          nextURL='/quest-7/'
          level={6}
          startMonth={7}
          startDate={2}
        />
      </div>
    </div>
  )
}

export default Quest6;
