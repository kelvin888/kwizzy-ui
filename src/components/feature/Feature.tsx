import RevealOnScroll from 'components/RevealOnScroll/RevealOnScroll'
import { type FC, type ReactNode } from 'react'

export const Feature: FC<{ title: string, description: string, icon: ReactNode }> = ({ title, description, icon }) => {
    return (
        <RevealOnScroll transitionDuration={1} slideDistance={100}>
            <div>
                {icon}
                <div className='mt-[3.1rem] mb-2 font-avertaSemiBold text-[2rem]'>
                    {title}
                </div>
                <div className='text-2xl text-grayscale-50'>{description}</div>
            </div>
        </RevealOnScroll>
    )
}