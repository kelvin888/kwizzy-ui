import React, { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const AdminContent: FC<Props> = ({ children }) => {
    return (
        <div className='bg-white w-full xl:max-w-[67rem] rounded-[1.875rem] min-h-[50rem] shadow-sm p-6 mb-10 bottom-7 flex-1 mr-8'>
            {children}
        </div>
    )
}
