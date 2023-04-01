//Styles
import styles from './TaskList.module.scss'


//INTERFACES
import ITasks from "../../types/tasks";
import TaskItem from "./TaskItem";

export default function TasksList({ tasks }: { tasks: Array<ITasks> }) {

    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tasks.map((_task, index) => <TaskItem task={_task} key={index} />)
                }

            </ul>
        </aside>
    );
}