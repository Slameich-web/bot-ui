import {FunctionComponent, ReactElement, ReactNode} from "react"

import {useAppSelector} from "@features/redux/store"
import {getMe} from "@features/account/slice"

import {Outlet} from "react-router-dom"
import {Group} from "@appTypes/account";

interface PermittedComponentProps {
    allowedRoles: (Group["name"] | null)[],
    fallback?: ReactElement,
    children?: ReactNode,
}

export const PermittedComponent: FunctionComponent<PermittedComponentProps> = ({allowedRoles, fallback, children}) => {
    const user = useAppSelector(getMe)

    console.log()

    const userAllowed = allowedRoles.includes(user?.role?.name || null)

    if (userAllowed) {
        return (
            <>
                {children || <Outlet/>}
            </>
        )
    }

    return null
}
