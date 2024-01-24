import Image, { StaticImageData } from 'next/image'
import React, { FC, ReactNode } from 'react'

type Props = {
    title: string,
    image: StaticImageData
}

const Category: FC<Props> = ({ title, image }) => {
    return (
        <div
            style={{ backgroundImage: `url(${image.src})` }}
            className={`relative rounded-[30px] bg-cover bg-no-repeat h-[172px] w-[235px] overflow-hidden`}>
            <div className='absolute bottom-3 left-5 font-poppins text-white text-xl font-bold'>{title}</div>
            {/* <Image src={image} className='rounded-[30px]' alt='featured category' width={235} height={172} /> */}
        </div>
    )
}

export default Category