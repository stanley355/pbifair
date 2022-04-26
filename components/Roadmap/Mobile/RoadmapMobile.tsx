import React, { useState } from 'react';
import { FaEquals } from 'react-icons/fa';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import styles from './RoadmapMobile.module.scss';

const RoadmapMobile = () => {
  const router = useRouter();
  const [showList, setShowList] = useState(false);
  const roadmapMenu = ['0. Who you are?', '1. Friend and College', '2. Not to Yield', '3. Three Blind Mice'];

  const setMenuBackground = (index: Number) => {
    const path = router.asPath;

    if (path === "/" && index === 0) {
      return styles.roadmap__mobile__menuActive;
    } else {
      const pathArr = path.split("-");
      const pathNum = pathArr[pathArr.length - 1];
      if (index < Number(pathNum)) return styles.roadmap__mobile__menuPassed;
      else if (index === Number(pathNum)) return styles.roadmap__mobile__menuActive;
      else return styles.roadmap__mobile__menuPassive;
    }
  }

  const RoadmapList = () => {
    return (
      <div>
        <div>Where am I ?</div>
        {roadmapMenu.map((menu, i) =>
          <div
            key={menu}
            className={classNames(styles.roadmap__mobile__menu, setMenuBackground(i))}>
            {menu}
          </div>
        )}
        <button
          className={styles.roadmap__mobile__closeBtn}
          onClick={() => setShowList(false)}>
          Close
        </button>
      </div>)
  }

  return (
    <div className={styles.roadmap__mobile}>
      <div className={styles.roadmap__mobile__equalSign} onClick={() => setShowList(true)}><FaEquals /></div>
      {
        showList ? <RoadmapList /> : <button
          className={styles.roadmap__mobile__openBtn}
          onClick={() => setShowList(true)}>
          The Road not Taken
        </button>
      }
    </div>
  )
}

export default RoadmapMobile;
