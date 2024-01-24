import React, { FC } from 'react'
type Props = {
    title: string
}
const Menu: FC<Props> = ({ title }) => {
    return (
        <div className='text-2xl'>{title}</div>
    )
}

export default Menu