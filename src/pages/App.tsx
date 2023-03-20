import React from 'react';

//COMPONENTES
import Forms from '../components/Forms';
import TasksList from '../components/taksList';

import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.AppStyles} >
      <Forms />
      <TasksList />
    </div>
  );
}

