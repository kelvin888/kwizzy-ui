import React, { type FC } from 'react'
import { Record } from './Record'
import CircleChecked from "assets/images/icons/circle-checked.svg"
import FlagFilledIcon from "assets/images/icons/flag-filled.svg"
import TimeIcon from "assets/images/icons/time.svg"


const Records: FC = () => {
    return (
        <div className='flex gap-12 mt-10'>
            <Record icon={FlagFilledIcon} title='Quiz Passed' value='27' />
            <Record icon={TimeIcon} title='Fastest Time' value='27min' />
            <Record icon={CircleChecked} title='Correct answers' value='200' />
        </div>
    )
}

export default Records