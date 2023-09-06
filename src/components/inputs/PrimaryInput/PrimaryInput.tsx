import {DetailedHTMLProps, FunctionComponent, InputHTMLAttributes, useId} from "react"

import styles from "./styles.module.css"
import {useField} from "formik";
import {InputError} from "@components/InputError";

interface BaseInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
}

export const PrimaryInput: FunctionComponent<BaseInputProps> = ({label, className, ...props}) => {
    const id = useId()

    const [field, meta, helpers] = useField(props.name || id)

    return (
        <div className={styles.container}>
            <InputError error={meta.error} touched={meta.touched} className={styles.error}/>
            <label htmlFor={field.name} className={styles.group}>
                <span className={styles.label}>{label}</span>
                <input {...props} {...field} className={`${className || ""} ${styles.input}`} />
            </label>
        </div>
    )
}
