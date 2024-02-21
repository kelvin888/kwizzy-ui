"use client"
import caretDown from "assets/images/caret-down.svg"
import HomeIllustration from "assets/images/homepage-illustration.svg"
import RevealOnScroll from "components/RevealOnScroll/RevealOnScroll"
import Button from 'components/button/Button'
import Image from 'next/image'
import { type FC } from 'react'


const Hero: FC = () => {

    return (
        <div className='px-24 pb-24 flex flex-wrap xl:flex-nowrap justify-center'>
            <div className='self-center xl:pl-24 pt-24'>
                <div
                    className='text-grayscale-100 text-[4rem] font-avertaBold xl:max-w-[41.875rem]'>Learn<br />
                    new concepts <br />
                    each minute
                </div>
                <RevealOnScroll direction="top">
                    <div
                        className='border-l-2 mt-7 text-grayscale-50 text-2xl border-l-secondary-100 pl-3 py-2 text-nowrap'>
                        We help you prepare for exams and quizes
                    </div>
                </RevealOnScroll>

                <div className='flex gap-12 mt-16'>
                    <RevealOnScroll>
                        <Button variant="gradient" size="large">Start solving</Button>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <Button variant="plain" className='text-primary-50 text-2xl font-medium' iconBefore={<Image className='mt-1' src={caretDown} alt='caret down' />}>know more</Button>
                    </RevealOnScroll>

                </div>
            </div>
            <div className='w-3/5'>
                <Image src={HomeIllustration} alt='home illustration' priority />
            </div>
        </div >
    )
}

export default Hero