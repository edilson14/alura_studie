import Button from "../Button";
import Clock from "./Clock";

import styles from './Timer.module.scss';

export default function Timer() {
    return (
        <div className={styles.cronometro}>
            <p className={styles.title}> Escolha um card e inicie o cronometro</p>
            <div className={styles.clockWrapper}>
                <Clock />
            </div>
            <Button label="Começar" type={undefined} />
        </div>
    );
}