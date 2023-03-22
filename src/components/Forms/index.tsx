import React from "react";

//components
import Button from "../Button";

//styles
import styles from './TaskFormStyles.module.scss'

export default class TasksForm extends React.Component {


    render() {

        return (
            <form className={styles.novaTarefa}>

                <div className={styles.inputContainer} >
                    <label htmlFor="tarefa">Adicione uma nova tarefa</label>
                    <input type="text" name="tarefa" id="tarefa" required placeholder="O que você quer estudar" />
                </div>
                <div className={styles.inputContainer} >
                    <label htmlFor="time">Tempo de estudo</label>
                    <input type="time" name="time" id="time" step="1" required min="00:00:00" max="01:30:00" />
                </div>

                <Button label={'Adicionar'} />
            </form>

        );
    }
}