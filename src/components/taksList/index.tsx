//Styles
import styles from './TaskList.module.scss'


//INTERFACES
import ITasks from "../../models/tasks";
import TaskItem from "./TaskItem";

export default function TasksList() {
    const allTaks: Array<ITasks> = [{
        description: 'estudar React',
        time: '02:30:00'
    }];


    const renderTaks = (task: ITasks, key: number) => (
        <TaskItem key={key} task={task} />
    )

    return (
        <aside className={styles.tasksList}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    allTaks.map((_task, index) => renderTaks(_task, index))
                }

            </ul>
        </aside>
    );
}