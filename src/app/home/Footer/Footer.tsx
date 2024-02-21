import Instagram from "assets/images/social/instagram.svg"
import LinkedIn from "assets/images/social/linkedin.svg"
import Social1 from "assets/images/social/social1.svg"
import Twitter from "assets/images/social/twitter.svg"
import RevealOnScroll from 'components/RevealOnScroll/RevealOnScroll'
import Logo from 'components/logo/Logo'
import Image from 'next/image'
import { type FC } from 'react'

const Footer: FC = () => {
    return (
        <div className='px-24 bg-gradient-grayscale flex justify-between items-center'>
            <RevealOnScroll direction="left">
                <Logo />
            </RevealOnScroll>

            <RevealOnScroll direction="right">
                <div className='flex items-center gap-12 py-20'>
                    <div><Image src={Social1} alt='social one' /></div>
                    <div><Image src={Twitter} alt='twitter logo' /></div>
                    <div><Image src={LinkedIn} alt='linkedin logo' /></div>
                    <div><Image src={Instagram} alt='instagram' /></div>
                </div>
            </RevealOnScroll>
        </div>
    )
}

export default Footer