"use client"
import React from 'react'
import MenuItem from './MenuItem/MenuItem'
import { useRouter } from 'next/navigation'
import { BookCheckIcon, LayoutDashboard, LogOut } from 'lucide-react'

export const AdminSidebar = () => {

    const router = useRouter();

    return (
        <div className='fixed  h-[calc(100vh_-_133px)] top-[8.313rem] flex flex-col w-[20.5rem] px-7'>
            <div className='flex flex-col gap-5'>
                <MenuItem Icon={LayoutDashboard} title='Dashboard' url='/dashboard' />
                <MenuItem Icon={BookCheckIcon} title='Take Quiz' url='/quiz' />
                {/* <MenuItem Icon={NotificationIcon} title='Notification' url='/notification' /> */}
            </div>

            <div className='mt-auto mb-8'>
                <MenuItem Icon={LogOut} title='Log Out' url='' onClick={() => router.push("/login")} />
            </div>
        </div>
    )
}

