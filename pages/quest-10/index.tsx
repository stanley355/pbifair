import React from 'react';
import PassForm from '../../components/PassForm';
import styles from './quest10.module.scss';
import instructionStyle from '../../styles/pages/instruction.module.scss';

const Quest10 = () => {
  const Instruction = () => {
    return (
      <div className={instructionStyle.instructions}>
        <h3>#10 Find Me</h3>
        <div className={instructionStyle.instructions__subtitle}>Rules and Guidelines:</div>
        <ol>
          <li>Go to HMPS PBI Instagram Account : <strong>@HMPSPBI_UAJ</strong> .</li>
          <li>Find information about the members of HMPS PBI</li>
          <li>Choose one of the members to contact. You can contact the chairperson, vice chairperson, secretaries, treasurer, and also the division coordinator.</li>
          <li>DM the administrator of the account to get information about the contact number of the members that you have chosen.</li>
          <li>Contact the selected hmps member once you get his/her contact. </li>
          <li>
            <div>Ask the following questions when you contact him/her:</div>
            <ul style={{ listStyle: 'none' }}>
              <li>a. Why did he/she join the English Education Department?</li>
              <li>b. What has he/she learned so far during his/her time in the English Education Department?</li>
            </ul>
          </li>
          <li>You are free to ask anything regarding PBI UAJ to the HMPS Members. Other than that, it is up to the selected member whether to answer your questions or not.</li>
          <li>After you have asked them those 2 questions, you will be given the ticket to go to the next level. Make sure that you ask them in English!</li>
        </ol>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.quest10}>
        <Instruction />
        <PassForm
          password="soprano"
          nextURL='/quest-11/'
          level={10}
          startMonth={7}
          startDate={4}
        />
      </div>
    </div>
  )
}

export default Quest10;
