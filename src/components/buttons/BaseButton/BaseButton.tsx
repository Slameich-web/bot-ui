import {ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent} from "react"

import styles from "./styles.module.css"

interface BaseButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const BaseButton: FunctionComponent<BaseButtonProps> = ({className, children, ...props}) => {
    return (
        <button className={`${styles.button} ${className}`} {...props}>
            {children}
        </button>
    )
}