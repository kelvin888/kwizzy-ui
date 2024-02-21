import threeDIcon from "assets/images/3dbox.svg"
import FeatureGraphic1 from "assets/images/feature-graphic-1.svg"
import FeatureGraphic2 from "assets/images/feature-graphic-2.svg"
import solutionsIcon from "assets/images/solutions-icon.svg"
import subjectsIcon from "assets/images/subject-icon.svg"
import RevealOnScroll from 'components/RevealOnScroll/RevealOnScroll'
import Image from 'next/image'
import { type FC } from 'react'
import { Feature } from '../../../components/feature/Feature'

const Features: FC = () => {
    return (
        <div className='p-24 xl:p-44 bg-gradient-grayscale relative'>
            <Image src={FeatureGraphic1} alt='feature graphic' className='absolute -top-0  left-0 w-40' />
            <RevealOnScroll>
                <div className='text-[3.375rem] max-w-[34.8rem] mx-auto text-center font-avertabold'>Quizzy comes with
                    amazing <span className='text-secondary-100'>features</span> like:
                </div>
            </RevealOnScroll>

            <div className='flex sm:flex-wrap lg:flex-nowrap justify-between mt-[6.2rem] gap-20'>
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
            <Image src={FeatureGraphic2} alt='feature graphic' className='absolute -bottom-20  right-0 w-28' />
        </div>
    )
}

export default Features