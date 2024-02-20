import { Feature } from 'components/feature/Feature'
import Image from 'next/image'
import React, { type FC } from 'react'
import JourneyItem1 from 'assets/images/journey/journey-item1.svg'
import JourneyItem2 from 'assets/images/journey/journey-item2.svg'
import JourneyItem3 from 'assets/images/journey/journey-item3.svg'
import JourneyItem4 from 'assets/images/journey/journey-item4.svg'

const LearningJourney: FC = () => {
    return (
        <div className='px-24 py-36'>
            <div className='text-[3.375rem] text-center xl:text-left xl:max-w-[29rem]'>
                Let’ checkout your <span className='text-secondary-100'>learning</span> journey
            </div>
            <div className='flex gap-28 mt-24'>
                <div className='grid xl:grid-cols-2 gap-4'>
                    <Feature
                        icon={<div className='font-avertaBold text-[3.375rem]'>1<span className='text-primary-100'>.</span></div>}
                        title='Choose your subject'
                        description='Choose your favourite subject
                        from the vast selection of subjects
                        and continnue your journey'
                    />
                    <Feature
                        icon={<div className='font-avertaBold text-[3.375rem]'>2<span className='text-primary-100'>.</span></div>}
                        title='Select the difficulty'
                        description='Select difficulty of your choice
                        and get the difficulty of questions
                        according to your difficulty'
                    />
                    <Feature
                        icon={<div className='font-avertaBold text-[3.375rem]'>3<span className='text-primary-100'>.</span></div>}
                        title='Increasing difficulty'
                        description='Difficulty of questions will increase for the upcoming question irrespective of result of a previous question'
                    />
                    <Feature
                        icon={<div className='font-avertaBold text-[3.375rem]'>4<span className='text-primary-100'>.</span></div>}
                        title='Detailed overview of scores'
                        description='Get the detailed overview of
                        your question answer session
                        and tips on how you can improve'
                    />
                </div>
                <div className='w-[55rem] hidden lg:block'>
                    <div>
                        <Image src={JourneyItem1} alt='journey item' />
                    </div>
                    <div className='flex justify-end'>
                        <Image src={JourneyItem2} alt='journey item' />
                    </div>
                    <div>
                        <Image src={JourneyItem3} alt='journey item' />
                    </div>
                    <div className='flex justify-end'>
                        <Image src={JourneyItem4} alt='journey item' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearningJourney