import styles from './Clock.module.scss';

export default function Clock() {
    return (
        <>
            <span className={styles.clockNumber}>0</span>
            <span className={styles.clockNumber}>0</span>
            <span className={styles.clockSplit}>:</span>
            <span className={styles.clockNumber}>0</span>
            <span className={styles.clockNumber}>0</span>
        </>
    );
}