
import styles from './ButtonStyles.module.scss'
interface ButtonProps {
    label: string;
    type?: "button" | "submit" | "reset";
}


export default function Button(props: ButtonProps) {
    const { type = 'button', label } = props;
    return (
        <button type={type} className={styles.buttonStyle} >
            {label}
        </button>
    )


}
