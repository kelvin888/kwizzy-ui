import { Progress } from 'components/Progress/Progress'
import React from 'react'

const Achievements = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-between mb-4'>
                <div className='text-2xl font-poppins font-bold text-grayscale-90 '>Achievements</div>
                <div className='w-[160px]'>
                    <Progress value={60} />
                </div>
            </div>
            <div className='shadow-sm p-6 w-[30rem] h-[22rem] rounded-[30px]'>
                achievements here
            </div>
        </div>
    )
}

export default Achievements