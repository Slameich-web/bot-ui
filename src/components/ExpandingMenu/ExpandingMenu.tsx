import {
    FunctionComponent,
    ReactNode,
    Children,
    isValidElement,
    useState,
    useEffect,
} from "react"

import {createPortal} from "react-dom";

import styles from "./styles.module.css"

interface ExpandingMenuProps {
    className?: string,
    headerContainerClassName?: string,
    children?: ReactNode | ReactNode[],
}

interface ExpandingMenuSubComponents {
    Header: FunctionComponent<HeaderProps>,
    Mobile: FunctionComponent<MobileProps>,
    Desktop: FunctionComponent<DesktopProps>,
}

interface HeaderProps {
    className?: string,
    children?: ReactNode,
}

interface MobileProps {
    open: boolean,
    onClose: () => void,
    anchor?: Element | null,
    className?: string,
    children?: ReactNode,
}

interface DesktopProps {
    open: boolean,
    onClose: () => void,
    className?: string,
    containerClassName?: string,
    children?: ReactNode,
}

const Header: FunctionComponent<HeaderProps> = ({className = "", children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

const Mobile: FunctionComponent<MobileProps> = ({open, onClose, anchor, className = "", children}) => {
    return createPortal(
        <div className={`${styles.mobile} ${className}`} style={{maxHeight: open ? "100dvh" : "0"}}>
            {children}
        </div>,
        anchor || document.body
    )
}

const Desktop: FunctionComponent<DesktopProps> = ({open, onClose, className = "", containerClassName = "", children}) => {
    return (
        <div className={`${styles.desktop} ${className} ${open ? styles.open: ""}`}>
            <div className={`${styles.desktopContainer} ${containerClassName}`}>
                {children}
            </div>
        </div>
    )
}

const ExpandingMenu: FunctionComponent<ExpandingMenuProps> & ExpandingMenuSubComponents = ({className = "", headerContainerClassName = "", children}) => {
    const childrenArray = Children.toArray(children)

    const header = childrenArray.find((child) => isValidElement(child) && child.type === Header)
    const mobileMenu = childrenArray.find((child) => isValidElement(child) && child.type === Mobile)
    const desktopMenu = childrenArray.find((child) => isValidElement(child) && child.type === Desktop)

    return (
        <div className={`${styles.menu} ${className}`}>
            <div className={`${styles.headerContainer} ${headerContainerClassName}`}>
                {header}
            </div>
            <div className={styles.spacer}>
                {header}
            </div>
            {desktopMenu}
            {mobileMenu}
        </div>
    )
}

ExpandingMenu.Mobile = Mobile
ExpandingMenu.Header = Header
ExpandingMenu.Desktop = Desktop

export {
    ExpandingMenu
}
