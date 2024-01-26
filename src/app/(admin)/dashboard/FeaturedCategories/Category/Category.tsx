"use client"
import { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

type Props = {
    title: string,
    image: StaticImageData
}

const Category: FC<Props> = ({ title, image }) => {
    const router = useRouter()

    const handleCategoryClick = () => {
        router.push("/quiz/details")
    }

    return (
        <div
            style={{ backgroundImage: `url(${image.src})` }}
            className={`relative rounded-[30px] bg-cover bg-no-repeat h-[172px] w-[235px] overflow-hidden`}
            onClick={handleCategoryClick}
        >
            <div className='absolute bottom-3 left-5 font-poppins text-white text-xl font-bold'>{title}</div>
        </div>
    )
}

export default Category