import React from 'react'
import threeDIcon from "assets/images/3dbox.svg"
import subjectsIcon from "assets/images/subject-icon.svg"
import solutionsIcon from "assets/images/solutions-icon.svg"
import FeatureGraphic1 from "assets/images/feature-graphic-1.svg"
import Image from 'next/image'
import { Feature } from '../../../components/feature/Feature'

const Features = () => {
    return (
        <div className='p-44 bg-gradient-grayscale relative'>
            <Image src={FeatureGraphic1} alt='feature graphic' className='absolute -top-20  left-0' />
            <div className='text-[54px] max-w-[557px] mx-auto text-center font-avertaSemiBold'>Quizzy comes with
                amazing <span className='text-secondary-100'>features</span> like:
            </div>
            <div className='flex justify-between mt-[100px] gap-32'>
                <Feature
                    icon={<Image src={threeDIcon} alt='3d icon' width={100} />}
                    description='3 dimensional coverage of all questions related to a perticular topic'
                    title='3D Coverage' />
                <Feature
                    icon={<Image src={subjectsIcon} alt='3d icon' width={100} />}
                    description='Plenty of subjects to choose from for e.g. Computer languages, Engineering subjects etc.'
                    title='Plenty of subjects' />
                <Feature
                    icon={<Image src={solutionsIcon} alt='3d icon' width={100} />}
                    description='Detailed explaination of a solution is provided to get depper understanding of a
                    topic'
                    title='Detailed solutions' />
            </div>
        </div>
    )
}

export default Features