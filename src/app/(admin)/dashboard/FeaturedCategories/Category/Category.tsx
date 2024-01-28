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
            className={`relative rounded-[1.875rem] bg-cover bg-no-repeat h-[10.7rem] w-full 2xl:w-[14.6rem] overflow-hidden min-w-[16rem]`}
            onClick={handleCategoryClick}
        >
            <div className='absolute bottom-3 left-5 font-poppins text-white text-xl font-bold'>{title}</div>
        </div>
    )
}

export default Category