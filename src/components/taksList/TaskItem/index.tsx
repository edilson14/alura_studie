import ITasks from "../../../models/tasks";
import styles from '../TaskList.module.scss'


interface ItemProp {
    task: ITasks,
    key: number;
}

export default function TaskItem(props: ItemProp) {
    const { key, task } = props;
    return (
        <li key={key} className={styles.item}>
            <h3>
                {task.description}
            </h3>
            <span>
                {task.time}
            </span>
        </li>
    )
}