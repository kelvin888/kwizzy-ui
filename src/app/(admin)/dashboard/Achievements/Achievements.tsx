import Image from 'next/image'
import React from 'react'
import ComebackIcon from "assets/images/achievements/comeback.png"
import WinnerIcon from "assets/images/achievements/winner.png"
import LuckIcon from "assets/images/achievements/luck.png"
import { ProgressBar } from 'components/progressBar/ProgressBar'

const Achievements = (): React.JSX.Element => {
    return (
        <div className=''>
            <div className='flex items-center justify-between mb-4'>
                <div className='text-2xl font-poppins font-bold text-grayscale-90 '>Achievements</div>
                <div className='w-[10rem]'>
                    <ProgressBar value={60} />
                </div>
            </div>
            <div className='shadow-sm p-6 w-[30rem] h-[22rem] rounded-[1.875rem]'>
                <div className='flex justify-between mt-2'>
                    <Image width={100} src={ComebackIcon} alt='comeback icon' />
                    <Image width={100} src={WinnerIcon} alt='comeback icon' />
                </div>
                <div className='flex justify-center'>
                    <Image width={100} src={LuckIcon} alt='comeback icon' />
                </div>
                <hr className='my-6 text-grayscale-70' />

                <div className='text-center text-grayscale-90'>View all</div>
            </div>
        </div>
    )
}

export default Achievements