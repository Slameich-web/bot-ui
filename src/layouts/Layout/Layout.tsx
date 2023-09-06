import {FunctionComponent, useEffect} from "react"

import styles from "./styles.module.css"
import {Outlet, useLocation} from "react-router-dom";
import {Header} from "@components/Header";

export const Layout: FunctionComponent = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, [location.key])

    return (
        <div className={styles.layout}>
            <Header/>
            <Outlet/>
        </div>
    )
}