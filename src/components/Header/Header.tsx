import {FunctionComponent, useRef, useState} from "react"

import styles from "./styles.module.css"
import {ExpandingMenu} from "@components/ExpandingMenu"
import {Link} from "react-router-dom";

import Logo from "@icons/Logo.svg"
import BurgerIcon from "@icons/BurgerIcon.svg"
import CloseIcon from "@icons/CloseIcon.svg"
import {BaseButton} from "@components/buttons/BaseButton";
import {TransparentButton} from "@components/buttons/TransparentButton";
import {logout} from "@features/account/slice";
import {useAppDispatch} from "@features/redux/store";

export const Header: FunctionComponent = () => {
    const dispatch = useAppDispatch()

    const [isMenuOpen, setMenuOpen] = useState(false)

    const anchorRef = useRef<HTMLDivElement>(null)

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState)
    }

    const logoutMe = () => {
        dispatch(logout())
    }

    return (
        <>
            <ExpandingMenu headerContainerClassName={styles.headerContainer}>
                <ExpandingMenu.Header className={styles.header}>
                    <Link to="/" className={styles.logo}>
                        <Logo width={25} height={25}/>
                    </Link>
                    <TransparentButton onClick={toggleMenu} className={styles.burgerButton}>
                        {isMenuOpen ? <CloseIcon width={25} height={25}/> : <BurgerIcon width={25} height={25}/>}
                    </TransparentButton>
                </ExpandingMenu.Header>
                <ExpandingMenu.Mobile open={isMenuOpen} onClose={toggleMenu} anchor={anchorRef.current}
                                      className={styles.mobile}>
                    <div className={styles.mobileMenu} onClick={toggleMenu}>
                        <Link to="/">
                            Доход
                        </Link>
                        <Link to="#">
                            Запросить выплату
                        </Link>
                        <Link to="#" onClick={logoutMe}>
                            Выход
                        </Link>
                    </div>
                </ExpandingMenu.Mobile>
                <ExpandingMenu.Desktop open={isMenuOpen} onClose={toggleMenu} containerClassName={styles.desktop}>
                    <div className={styles.desktopMenu} onClick={toggleMenu}>
                        AAAA
                    </div>
                </ExpandingMenu.Desktop>
            </ExpandingMenu>
            <div ref={anchorRef}/>
        </>
    )
}