import styles from "./styles.module.css"
import {BaseButton} from "@components/buttons/BaseButton";
import {ComponentProps} from "react";

export const TransparentButton = ({className, ...props}: ComponentProps<typeof BaseButton>) => {
    return BaseButton({
        className: `${className} ${styles.button}`,
        ...props
    })
}
