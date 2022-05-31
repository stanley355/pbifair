import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { FaRegPaperPlane, FaArrowLeft } from 'react-icons/fa';

const Navbar = () => {
  const [showGuideline, setShowGuideline] = useState(false);
  const [selectedGuideline, setSelectedGuideline] = useState("");

  const GuidelineList = () => {
    const guidelineMenu = [
      {
        title: "Welcome to Finder Seekers",
        value: "welcome"
      },
      {
        title: "Finder Seekers' Schedule",
        value: "schedule"
      },
      {
        title: "About Finder Seekers",
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
      <div className={styles.navbar__guideline__list}>
        {guidelineMenu.map((menu) =>
          <button onClick={() => setSelectedGuideline(menu.value)} >{menu.title}</button>
        )}
      </div>
    )
  }

  const GuidelineWelcome = () => {
    return (
      <div className={styles.navbar__guideline__welcome}>
        <p>Hello Seekers, Welcome to Finders Seekers.</p>
        <p>In Finders Seekers, you will explore the world of Pendidikan Bahasa Inggris (PBI), UNIKA Atma Jaya, through a series of missions in six days.</p>
        <p>You play as the Seeker who has to find the clues throughout the game in order to win the prizes. Every day, you will be given two missions to complete. Every time you complete a mission, you will be given the clue which will allow you to advance further in Finders Seekers.</p>
        <p>Be the first to successfully complete the missions to get the chance to win the Daily Prizes and the Grand Prizes! There will be a total of 18 winners of Daily Prizes and three winners of the Grand Prizes. The Daily Prize winners will be announced on the following day on @hmpspbi_uaj IG account. The Grand Prize winners will be announced during the FPB Fair on July 08, 2022.</p>
      </div>
    )
  }

  const setShowingGuideline = (guidelineValue: string) => {
    switch (guidelineValue) {
      case "welcome":
        return <GuidelineWelcome />;
      case "":
        return <GuidelineList />;
      default:
        return <GuidelineList />;
    }
  }

  const backToPrevMenu = () => {
    if (selectedGuideline === "") setShowGuideline(false)
    else return setSelectedGuideline("");
  }

  const Guideline = () => {
    return (
      <div className={styles.navbar__guideline}>
        <div className={styles.navbar__guideline__head}>
          <div className={styles.navbar__guideline__head__logoContainer}>
            <img
              src="/images/atma-logo.png"
              width="180px"
              height="80px"
            />
          </div>
          <div className={styles.navbar__guideline__head__menu}>
            <button className={styles.navbar__guideline__head__menu__backBtn} onClick={backToPrevMenu}><FaArrowLeft /> </button>
            <div className={styles.navbar__guideline__head__menu__title}>Guideline</div>
          </div>
        </div>
        <div className={styles.navbar__guideline__body}>
          {setShowingGuideline(selectedGuideline)}
        </div>
      </div>
    )
  }

  return (
    <header className={styles.navbar}>
      <div>
        <img
          src="/images/atma-logo.png"
          width="120px"
          height="50px"
        />
      </div>
      <button className={styles.navbar__openGuidelineBtn} onClick={() => setShowGuideline(true)}>
        <FaRegPaperPlane />
        <div>Guideline</div>
      </button>
      {showGuideline && <Guideline />}
    </header>
  );
}

export default Navbar;
