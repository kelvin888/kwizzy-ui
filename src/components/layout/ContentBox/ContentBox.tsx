import React, { type FC, type ReactNode } from 'react'
import { AdminContent } from './Content/Content'
interface Props {
    children: ReactNode
}
export const ContentBox: FC<Props> = ({ children }) => {
    return (
        <div className='absolute top-[8.313rem] xl:left-[20rem] w-full xl:w-[calc(100vw_-_329px)]'>
            <AdminContent>
                {children}
            </AdminContent>
        </div >
    )
}