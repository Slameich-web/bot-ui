import {ComponentProps, DetailedHTMLProps, FunctionComponent, InputHTMLAttributes, useId} from "react"

import styles from "./styles.module.css"
import { useField } from "formik"
import {InputError} from "@components/InputError";

interface BaseInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
}

export const BaseInput: FunctionComponent<BaseInputProps> = ({label, className, ...props}) => {
    const id = useId()

    const [field, meta, helpers] = useField(props.name || id)
    
    return (
        <div className={styles.container}>
            <label htmlFor={field.name} className={styles.label}>{label}</label>
            <>
                <InputError error={meta.error} touched={meta.touched} className={styles.error}/>
                <input {...props} {...field} className={`${className || ""} ${styles.label}`}/>
            </>
        </div>
    )
}
