import React, { FC, ReactNode } from 'react'
type Props = {
    children: ReactNode
}
const Container: FC<Props> = ({ children }) => {
    return (
        <div className='max-w-[90rem] mx-auto'>{children}</div>
    )
}

export default Container