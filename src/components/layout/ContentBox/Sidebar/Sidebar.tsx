"use client"
import React from 'react'
import MenuItem from './MenuItem/MenuItem'
import { useRouter } from 'next/navigation'
import DashboardIcon from "components/icons/dashboard"
import NotificationIcon from "components/icons/notification"
import SupportIcon from "components/icons/support"
import LogoutIcon from "components/icons/logout"

export const AdminSidebar = () => {

    const router = useRouter();

    return (
        <div className='fixed  h-[calc(100vh_-_133px)] top-[133px] flex flex-col w-[329px] px-7'>
            <div className='flex flex-col gap-5'>
                <MenuItem Icon={DashboardIcon} title='Dashboard' url='/dashboard' />
                <MenuItem Icon={SupportIcon} title='Support' url='/quiz' />
                <MenuItem Icon={NotificationIcon} title='Notification' url='/notification' />
            </div>

            <div className='mt-auto mb-8'>
                <MenuItem Icon={LogoutIcon} title='Log Out' url='' onClick={() => router.push("/login")} />
            </div>
        </div>
    )
}

