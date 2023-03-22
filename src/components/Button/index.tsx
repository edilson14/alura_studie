
import styles from './ButtonStyles.module.scss'
interface ButtonProps {
    label: string;
}


export default function Button(props: ButtonProps) {

    return (

        <button className={styles.buttonStyle}>
            {props.label}
        </button>
    )


}
