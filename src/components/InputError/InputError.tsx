import {FunctionComponent} from "react"

import styles from "./styles.module.css"

interface InputErrorProps {
    error?: string | undefined,
    touched?: boolean,
    className?: string,
}

export const InputError: FunctionComponent<InputErrorProps> = ({error, touched = true, className = ""}) => {
    if(touched && error) {
        return (
            <p className={`${styles.error} ${className}`}>
                {error}
            </p>
        )
    }
    return null
}
