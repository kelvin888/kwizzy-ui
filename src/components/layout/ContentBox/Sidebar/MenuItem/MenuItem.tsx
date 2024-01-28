import React, { FC, SVGProps } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { LucideIcon } from 'lucide-react'

type Props = {
    title: string
    url: string
    onClick?: () => void
    Icon: FC<SVGProps<SVGSVGElement>> | LucideIcon
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

    const isActiveLink = url && pathname.includes(url)

    return (
        <div className={`flex items-center gap-7 cursor-pointer rounded-[1.875rem] px-10 py-5 text-grayscale-90  ${isActiveLink ? "bg-grayscale-50 text-white" : ""}`} onClick={handleMenuItemClick}>
            <Icon />
            <span className='font-semibold'>{title}</span>
        </div >
    )
}

export default MenuItem