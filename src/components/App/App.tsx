import {FC, useEffect} from "react"

import styles from "./styles.module.css"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {PermittedComponent} from "@components/PermittedComponent";
import {SignIn} from "@pages/SignIn";
import {SignUp} from "@pages/SignUp";
import {Layout} from "@layouts/Layout";
import {Incomes} from "@pages/Incomes";
import {Calculator} from "@components/Calculator";

interface AppProps {

}

export const App: FC<AppProps> = () => {

    useEffect(() => {
        window?.Telegram?.WebApp?.ready()
        window?.Telegram?.WebApp?.expand()
    }, []);

    return (
        <BrowserRouter>
            <PermittedComponent allowedRoles={[null]}>
                <Routes>
                    <Route index element={<Navigate to="sign-in"/>}/>
                    <Route path="sign-in" element={<SignIn/>}/>
                    <Route path="sign-up" element={<SignUp/>}/>
                    <Route path="calculator" element={<Calculator/>}/>
                </Routes>
            </PermittedComponent>
            <PermittedComponent allowedRoles={["user"]}>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route index element={<Incomes/>}/>
                    </Route>
                    <Route path="sign-in" element={<Navigate to="/"/>}/>
                    <Route path="sign-up" element={<Navigate to="/"/>}/>
                    <Route path="calculator" element={<Calculator/>}/>
                </Routes>
            </PermittedComponent>
        </BrowserRouter>
    );
}
