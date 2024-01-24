'use client'
import Logo from 'components/logo/Logo'
import React from 'react'
import Button from 'components/button/Button'
import { useRouter } from 'next/navigation'
import TopNav from './TopNav/TopNav'

const Header = () => {
    const router = useRouter()
    const navigateToLogin = () => {
        router.push("/login")
    }
    return (
        <div className='px-24 pt-16 flex justify-between items-center'>
            <Logo />
            <div className='flex items-center gap-20'>
                <TopNav />
                <Button variant="secondary" buttonType="outlined" size="large" onClick={navigateToLogin}>Login</Button>
            </div>
        </div>
    )
}

export default Header