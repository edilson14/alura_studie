import React from "react";

//INTERFACES
import ITasks from "../../models/tasks";

export default function List() {
    const allTaks: Array<ITasks> = [{
        description: 'estudar React',
        time: '02:30:00'
    }];


    const renderTaks = (task: ITasks, key: number) => (<>
        <li key={key}>
            <h3>
                {task.description}
            </h3>
            <span>
                {task.time}
            </span>
        </li>
    </>)

    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    allTaks.map((_task, index) => renderTaks(_task, index))
                }

            </ul>
        </aside>
    );
}