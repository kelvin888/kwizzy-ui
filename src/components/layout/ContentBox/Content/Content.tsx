import React, { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const AdminContent: FC<Props> = ({ children }) => {
    return (
        <div className='bg-white rounded-[30px] min-h-[70vh] shadow-sm p-6 mb-10 bottom-7 flex-1 mr-8'>
            {children}
        </div>
    )
}
