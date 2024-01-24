import React from 'react'
import Menu from './Menu/Menu'

const TopNav = () => {
    return (
        <div className='flex gap-12 text-grayscale-50'>
            <Menu title="How it Works?" />
            <Menu title="Features" />
            <Menu title="About Us" />
        </div>
    )
}

export default TopNav