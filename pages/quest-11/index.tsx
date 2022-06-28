import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest11.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest11 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#11 Thinking Out Loud</h3>
        <div>Hello Seekers,</div>
        <div>You’ve reached the 11th mission: Thinking Out Loud.</div>
        <div>Please watch a video from National Geographic which can be accessed through this link:
          <a href=" https://www.nationalgeographic.org/video/on-communication-styles/"> Link</a>
        </div>
        <div>After watching the video, contact one of the lecturers below and share your opinion about the content of the video to her. The following are the time slots of the availability of each of the lecturers and their contact numbers:</div>
        <table>
          <tbody>
            <tr>
              <th>No</th>
              <th>Lecturer’s Names</th>
              <th>Contact Number</th>
              <th>Time Slots</th>
            </tr>
            <tr>
              <td>1</td>
              <td> Ms. Tia Xenia</td>
              <td><a href="https://api.whatsapp.com/send/?phone=6285729795840">0857-2979-5840</a></td>
              <td>
                <div>- Tuesday, July 5: 13:00 - 16:00</div>
                <div>- Wednesday, July 6: 12:00 - 15:00</div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td> Ms. Christina Eli Indriyani</td>
              <td><a href="https://api.whatsapp.com/send/?phone=6287788019184">0877-8801-9184</a></td>
              <td>
                <div>- Tuesday, July 5 15.00-18.00</div>
                <div>- Wednesday, July 6 15.00-18.00</div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td> Ms. Lanny Hidajat</td>
              <td><a href="https://api.whatsapp.com/send/?phone=6281320262397">0813-2026-2397</a></td>
              <td>
                <div>- Tuesday, July 5: 14:00 - 18:00</div>
                <div>- Wednesday, July 6: 14:00 - 16:00</div>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td> Ms. Ani Yani</td>
              <td><a href="https://api.whatsapp.com/send/?phone=6282299550255">0822-9955-0255</a></td>
              <td>
                <div>- Tuesday, July 5 13.00-17.00</div>
                <div>- Wednesday, July 6 13.00-17.00</div>
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          Make sure you contact the specified lecturer in accordance with the given time slots. You will get the ticket to go to the next mission from the lecturer after sharing what you learn from the video to her.
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest11}>
        <Instruction />
        <PassForm
          password="lecture"
          nextURL='/quest-12/'
          level={11}
          startMonth={7}
          startDate={5}
        />
      </div>
    </div>
  )
}

export default Quest11;
