import {ComponentProps, FunctionComponent, useEffect} from "react"

import styles from "./styles.module.css"
import {Form, Formik, FormikHelpers, FormikValues} from "formik"
import {BaseInput} from "@components/inputs/BaseInput";
import {useTranslatedSchema} from "@hooks/useTranslatedSchema";
import {signInFormValidationSchema} from "@helpers/validationSchemes/sign-in";
import {MainButton} from "@vkruglikov/react-telegram-web-app";
import {useSignInMutation} from "@features/account/api";
import {PrimaryInput} from "@components/inputs/PrimaryInput";
import {PrimaryButton} from "@components/buttons/PrimaryButton";

interface Values {
    email: string,
    password: string,
}

const initialValues: Values = {
    email: "",
    password: "",
}

export const SignIn: FunctionComponent = () => {
    const schema = useTranslatedSchema(signInFormValidationSchema)

    const [signIn] = useSignInMutation()

    const isTelegramWebApp = !!(window?.Telegram?.WebApp?.platform && window?.Telegram?.WebApp?.backgroundColor)

    const onSubmit = async (values: Values, {setSubmitting, setErrors}: FormikHelpers<Values>) => {
        setSubmitting(true)

        try {
            await signIn(values).unwrap()
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={styles.page}>
            <h3 className={styles.title}>Авторизация</h3>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
                {(({submitForm, isValid}) => (
                    <div className={styles.content}>
                        <Form className={styles.form}>
                            <PrimaryInput name="email" label="E-mail" placeholder="john.doe@mail.com"/>
                            <PrimaryInput name="password" label="Password" placeholder="********"/>
                            {!isTelegramWebApp &&
                                <div className={styles.submitButton}>
                                    <PrimaryButton type="submit" disabled={!isValid}>Войти</PrimaryButton>
                                </div>
                            }
                            <MainButton text="Войти" onClick={submitForm} disabled={!isValid}/>
                        </Form>
                    </div>
                ))}
            </Formik>
        </div>
    )
}