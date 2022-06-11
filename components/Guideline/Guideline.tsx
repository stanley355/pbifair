import React, { useState } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import styles from './Guideline.module.scss';

const Guideline = () => {
  const [selectedGuideline, setSelectedGuideline] = useState("");

  const GuidelineList = () => {
    const guidelineMenu = [
      {
        title: "Welcome to Finders Seekers",
        value: "welcome"
      },
      {
        title: "Finders Seekers' Schedule",
        value: "schedule"
      },
      {
        title: "About Finders Seekers",
        value: "about"
      },
      {
        title: "Tips and Tricks",
        value: "tips"
      },
      {
        title: "How to Win",
        value: "winning"
      }
    ]

    return (
      <div className={styles.guideline__list}>
        {guidelineMenu.map((menu) =>
          <button onClick={() => setSelectedGuideline(menu.value)} key={menu.title}>{menu.title}</button>
        )}
      </div>
    )
  }

  const GuidelineWelcome = () => {
    return (
      <div className={styles.guideline__welcome}>
        <p>Hello Seekers, Welcome to Finders Seekers.</p>
        <p>In Finders Seekers, you will explore the world of Pendidikan Bahasa Inggris (PBI), UNIKA Atma Jaya, through a series of missions in six days.</p>
        <p>You play as the Seeker who has to find the clues throughout the game in order to win the prizes. Every day, you will be given two missions to complete. Every time you complete a mission, you will be given the clue which will allow you to advance further in Finders Seekers.</p>
        <p>Be the first to successfully complete the missions to get the chance to win the Daily Prizes and the Grand Prizes! There will be a total of 18 winners of Daily Prizes and three winners of the Grand Prizes. The Daily Prize winners will be announced on the following day on @hmpspbi_uaj IG account. The Grand Prize winners will be announced during the FPB Fair on July 08, 2022.</p>
      </div>
    )
  }

  const GuidelineSchedule = () => {
    return (
      <div className={styles.guideline__schedule}>
        <p>Finders Seekers will start on June 30th, 2022 until July 6th, 2022.
          Every day, the quest begins from 12 pm until 06 pm.
          Below is the schedule of each mission:
        </p>
        <table>
          <tr>
            <th>Date</th>
            <th>Challenges</th>
          </tr>
          <tr>
            <td>June 30th, 2022</td>
            <td>
              <div>Who's the Alumni?</div>
              <div>Down the Memory Lane</div>
            </td>
          </tr>
          <tr>
            <td>July 1st, 2022</td>
            <td>
              <div>Catch the Glitch</div>
              <div>Tongue Twister</div>
            </td>
          </tr>
          <tr>
            <td>July 2nd, 2022</td>
            <td>
              <div>Edu-Fields</div>
              <div>Draw Me</div>
            </td>
          </tr>
          <tr>
            <td>July 3rd, 2022</td>
            <td>
              <div>Getting to know English Days</div>
              <div>Figure in the Picture</div>
            </td>
          </tr>
          <tr>
            <td>July 4th, 2022</td>
            <td>
              <div>Who's the Lecturer</div>
              <div>Find Me</div>
            </td>
          </tr>
          <tr>
            <td>July 5th, 2022</td>
            <td>
              <div>Thinking Out Loud</div>
              <div>Dear Lessons</div>
            </td>
          </tr>
          <tr>
            <td>July 6th, 2022</td>
            <td>
              Show Me Your Groove
            </td>
          </tr>
        </table>
        <p>You are allowed to start your quest in Finders Seekers on any date between June 30 and July 06. </p>
      </div>
    )
  }

  const GuidelineAbout = () => {
    return (
      <div className={styles.guideline__about}>
        <p>About the Game:</p>
        <ol>
          <li>There are 13 missions to complete to finish the game and get the chance to win the Grand Prizes.</li>
          <li>In each mission, you will receive instructions. Once you finish the mission, you'll be given a clue which will serve as a ticket to continue to the next mission.</li>
          <li>To complete the mission, follow the given instructions as neatly as you can. You will have to answer questions, contact someone, or make something and upload it through a given link. </li>
          <li>Every day, the quest begins from 12 pm until 06 pm. You will receive the clues to access the next missions only during the time period of the quest. Should you finish a mission later or earlier than this time period you will still be able to submit your work anytime; however, the clue will be given to you when the next time period of the quest begins.</li>
        </ol>
      </div>
    )
  }

  const GuidelineTips = () => {
    return (
      <div className={styles.guideline__tips}>
        <p>Tips and Tricks:</p>
        <p>How to win the Daily Prizes:</p>
        <ol>
          <li>There are two missions to complete everyday, except for the last day. The winners of daily prizes are the first three seekers who can finish all missions assigned on each day. </li>
          <li>To become the winners of daily prizes, you must follow the instructions of each mission as accurately as possible. </li>
          <li>The winners of daily prizes will be announced on the following day on @hmpspbi_uaj IG account  and get prizes from the committee.</li>
          <li>Keep in mind that every mission has its standards and regulations. Even though you are the fastest, if your work doesn’t pass a certain criteria, you will not be able to win the daily prizes.
          </li>
          <li>The daily prize will be sent to the winner's address.</li>
        </ol>
        <p>Other than the daily prizes,  Finders Seekers also has 3 Grand Prizes for 3 winners. The winners of the Grand Prizes are those who get the highest points.</p>
      </div>
    )
  }

  const GuidelineWinning = () => {
    return (
      <div className={styles.guideline__winning}>
        <p>How to win points for the Grand Prizes:</p>
        <ol>
          <li>Complete all the missions. You will get +1 point for each mission you have completed.</li>
          <li>Win the Daily Prizes to get +3 points for the first winner, +2 points for the second winner, and +1 point for the third winner.</li>
          <li>
            <div>Earn special additional points if your works in the following missions get the highest votes from the committee:</div>
            <ul>
              <li>Tongue Twister: +5 points</li>
              <li>Show me your groove: +5 Points</li>
              <li>Draw Me: +3 Points</li>
              <li>Figure in the picture: +3 Points</li>
            </ul>
          </li>
        </ol>
        <p>Other than the daily prizes,  Finders Seekers also has 3 Grand Prizes for 3 winners. The winners of the Grand Prizes are those who get the highest points.</p>
      </div>
    )
  }

  const setShowingGuideline = (guidelineValue: string) => {
    switch (guidelineValue) {
      case "welcome":
        return <GuidelineWelcome />;
      case "schedule":
        return <GuidelineSchedule />;
      case "about":
        return <GuidelineAbout />;
      case "tips":
        return <GuidelineTips />;
      case "winning":
        return <GuidelineWinning />;
      case "":
        return <GuidelineList />;
      default:
        return <GuidelineList />;
    }
  }

  return (
    <div className={styles.guideline}>
      {selectedGuideline !== "" &&
        <div className={styles.guideline__head}>
          <button className={styles.guideline__head__backBtn} onClick={() => setSelectedGuideline("")}>
            <FaArrowAltCircleLeft /> 
          </button>
        </div>
      }

      <div className={styles.guideline__body}>
        {setShowingGuideline(selectedGuideline)}
      </div>
    </div>
  );
}

export default Guideline;