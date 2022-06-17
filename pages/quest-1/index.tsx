import React, { useState } from 'react';
import Router from 'next/router';
import PassForm from '../../components/PassForm';
import styles from './quest1.module.scss';

const Quest1 = () => {
  return (
    <div className="container">
      <div className={styles.quest1}>
        <PassForm
          password="replace"
          nextURL='/quest-2/'
        />
      </div>
    </div>
  )
}

export default Quest1;
