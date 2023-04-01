import React from "react";

//components
import Button from "../Button";
import ITasks from "../../types/tasks";

//styles
import styles from './TaskFormStyles.module.scss'

export default class Forms extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITasks[]>>
}> {
    state: ITasks = {
        description: "",
        time: '00:00:00'
    };

    saveTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTarefas(task => [...task, this.state]);
        console.log(this.state)
    }

    render() {

        return (
            <form className={styles.novaTarefa} onSubmit={this.saveTask.bind(this)}>
                <div className={styles.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        required
                        value={this.state.description}
                        onChange={evento => this.setState({ ...this.state, description: evento.target.value })}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        value={this.state.time}
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                        onChange={evento => this.setState({ ...this.state, time: evento.target.value })}
                    />
                </div>
                <Button type="submit" label="Adicionar" />
            </form>

        );
    }
}