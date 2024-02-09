import React from 'react'
import Menu from './Menu/Menu'

const TopNav = () => {
    return (
        <div className='lg:flex gap-12 text-grayscale-50 hidden'>
            <Menu title="How it Works?" />
            <Menu title="Features" />
            <Menu title="About Us" />
        </div>
    )
}

export default TopNav