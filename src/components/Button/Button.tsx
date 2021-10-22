import { FC } from 'react'
import classes from './Button.module.scss'

const Button: FC<ButtonProps> = ({ label, click }) => {
    return (
        <button onClick={click} className={classes.button}>
            {label}
        </button>
    )
}

export default Button

interface ButtonProps {
    label: string
    click: () => void
}
