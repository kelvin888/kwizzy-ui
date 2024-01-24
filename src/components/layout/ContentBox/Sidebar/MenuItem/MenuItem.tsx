import React, { FC, SVGProps } from 'react'
import { useRouter, usePathname } from 'next/navigation'

type Props = {
    title: string
    url: string
    onClick?: () => void
    Icon: FC<SVGProps<SVGSVGElement>>
}

const MenuItem: FC<Props> = ({ title, url, onClick, Icon }) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleMenuItemClick = () => {
        if (onClick) {
            return onClick()
        }
        return router.push(url)
    }

    return (
        <div className={`flex items-center gap-7 cursor-pointer rounded-[30px] px-10 py-5 text-grayscale-90  ${pathname === url ? "bg-grayscale-50 text-white" : ""}`} onClick={handleMenuItemClick}>
            <Icon />
            <span>{title}</span>
        </div >
    )
}

export default MenuItem