import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest7.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest7 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#7 Getting to know English Days</h3>
        <div className={instructionStyle.instructions__subtitle}>Instruction:</div>
        <ol>
          <li>Go to your Instagram and search HMPS PBI Instagram Account:
            <strong> @hmpspbi_uaj</strong>
          </li>
          <li>Find the English Day's Project. There are eight infographics: Part of Speech, Phrasal Verb, British English vs American English, Slang Words, Infinitives and Gerunds, What is an idiom?, Specific Verb, and Silent Letters</li>
          <li>Pick one of the eighth infographics and make a summary of the infographics.</li>
          <li>Type your answers in Ms.word/Gdocs.</li>
          <li>Save your file and name it with this format:
            <strong>Nickname_GettingToKnowED</strong>  (Note: Nickname as registered in Finders Seekers)
          </li>
          <li>Upload your work to <a href="https://tinyurl.com/2p8w9e7k">https://tinyurl.com/2p8w9e7k</a> </li>
          <li>You will get the ticket immediately after you have uploaded your work.</li>
          <li>If you have any problem, contact the PIC through Whatsapp (Aurelie - 0895-3588-8056 or Grace - 0812-9227-7252)</li>
        </ol>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest7}>
        <Instruction />
        <PassForm
          password="gesture"
          nextURL='/quest-8/'
          level={7}
        />
      </div>
    </div>
  )
}

export default Quest7;
