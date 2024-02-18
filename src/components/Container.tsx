import React, { type FC, type ReactNode } from 'react'
interface Props {
    children: ReactNode
}
const Container: FC<Props> = ({ children }) => {
    return (
        <div className='max-w-[90rem] mx-auto'>{children}</div>
    )
}

export default Container