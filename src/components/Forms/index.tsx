import React from "react";

//components
import Button from "../Button";


export default function Forms() {



    return (
        <form>

            <div>
                <label htmlFor="task">Adicione uma nova tarefa</label>
                <input type="text" name="task" id="task" required placeholder="O que você quer estudar" />
            </div>
            <div>
                <label htmlFor="studieTime">Tempo de estudo</label>
                <input type="time" name="studieTime" id="studieTime" step="1" required min="00:00:00" max="01:30:00" />
            </div>

            <Button></Button>
        </form>

    );
}