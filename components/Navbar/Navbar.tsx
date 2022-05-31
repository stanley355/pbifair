import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { FaRegPaperPlane, FaArrowLeft } from 'react-icons/fa';

const Navbar = () => {
  const [showGuideline, setShowGuideline] = useState(false);

  const Guideline = () => {
    return (
      <div className={styles.navbar__guideline}>
        <div className={styles.navbar__guideline__head}>
          <div>
            <img
              src="/images/atma-logo.png"
              width="150px"
              height="80px"
            />
          </div>
          <div className={styles.navbar__guideline__head__menu}>
            <button className={styles.navbar__guideline__head__menu__backBtn}><FaArrowLeft /> </button>
            <div className={styles.navbar__guideline__head__menu__title}>Guideline</div>
          </div>
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
      <button className={styles.navbar__openGuidelineBtn} onClick={()=> setShowGuideline(true)}>
        <FaRegPaperPlane />
        <div>Guideline</div>
      </button>
      {showGuideline && <Guideline />}
    </header>
  );
}

export default Navbar;
