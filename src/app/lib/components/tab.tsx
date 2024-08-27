"use client"
import React from 'react'
import "../../globals.css"
import { usePathname } from 'next/navigation'
interface IProps {
    href: string
    children: string
}
export default function Tab({ href, children }: IProps) {
    let pathName = usePathname()
    let styleName = pathName == href ? "is-active" : ""
    return (
        <>
            <li className={styleName}><a href={href}>{children}</a></li>
        </>
    )
}
