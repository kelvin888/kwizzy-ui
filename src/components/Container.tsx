import React, { FC, ReactNode } from 'react'
type Props = {
    children: ReactNode
}
const Container: FC<Props> = ({ children }) => {
    return (
        <div className='max-w-[1440px] mx-auto'>{children}</div>
    )
}

export default Container