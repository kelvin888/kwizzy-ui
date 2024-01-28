import React, { FC, ReactNode } from 'react'
import { AdminContent } from './Content/Content'
type Props = {
    children: ReactNode
}
export const ContentBox: FC<Props> = ({ children }) => {
    return (
        <div className='absolute top-[8.313rem] left-[20rem] w-full md:w-[calc(100vw_-_329px)]'>
            <AdminContent>
                {children}
            </AdminContent>
        </div >
    )
}

{/* <div className='absolute top-[3.875rem] w-full px-8 pb-8 md:left-48 md:w-[calc(100vw_-_12rem)]'> */ }
