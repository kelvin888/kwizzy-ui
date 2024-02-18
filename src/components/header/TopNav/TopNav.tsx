import React, { type FC } from 'react'
import Menu from './Menu/Menu'

const TopNav: FC = () => {
    return (
        <div className='xl:flex gap-12 text-grayscale-50 hidden'>
            <Menu title="How it Works?" />
            <Menu title="Features" />
            <Menu title="About Us" />
        </div>
    )
}

export default TopNav