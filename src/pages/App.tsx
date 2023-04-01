import React, { useState } from 'react';
import Forms from '../components/Forms';
import TasksList from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';
import ITasks from '../types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])


  return (
    <div className={style.AppStyle}>
      <Forms setTarefas={setTasks} />
      <TasksList tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;
