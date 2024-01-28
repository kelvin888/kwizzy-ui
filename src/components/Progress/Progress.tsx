import React, { FC } from 'react'
type Props = {
    value: number
}
export const Progress: FC<Props> = ({ value }) => {
    return (
        <div className="w-full bg-grayscale-30 rounded-[1.875rem] h-3">
            <div style={{ width: `${value}%` }} className={`bg-grayscale-40 rounded-[1.875rem] text-xs h-full leading-none py-1 text-center]`}>&nbsp;</div>
        </div>
    )
}
