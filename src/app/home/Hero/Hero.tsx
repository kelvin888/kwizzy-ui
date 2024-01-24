import Image from 'next/image'
import React from 'react'
import HomeIllustration from "assets/images/homepage-illustration.svg"
import caretDown from "assets/images/caret-down.svg"
import Button from 'components/button/Button'

const Hero = () => {
    return (
        <div className='px-24 pb-24 flex'>
            <div className='self-center pl-24'>
                <div className='text-grayscale-100 text-[64px] font-avertaBold max-w-[430px]'>Learn
                    new concepts
                    each minute</div>
                <div className='border-l-2 mt-7 text-grayscale-50 text-2xl border-l-secondary-100 pl-3 py-2 text-nowrap'>
                    We help you prepare for exams and quizes
                </div>
                <div className='flex gap-12 mt-16'>
                    <Button variant="gradient" size="large">Start solving</Button>
                    <Button variant="plain" className='text-primary-50 text-2xl font-medium' iconBefore={<Image className='mt-1' src={caretDown} alt='caret down' />}>know more</Button>

                </div>
            </div>
            <div className='w-3/5'>
                <Image src={HomeIllustration} alt='home illustration' priority />
            </div>
        </div>
    )
}

export default Hero