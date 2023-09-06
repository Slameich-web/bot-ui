import {TFunction} from "i18next";

import * as Yup from "yup"

export const signInFormValidationSchema = (t: TFunction) => Yup.object().shape({
    email: Yup.string().email(t("validation:invalid.email")?.toString()).required(t("validation:required")?.toString()),
    password: Yup.string().required(t("validation:required")?.toString())
})
