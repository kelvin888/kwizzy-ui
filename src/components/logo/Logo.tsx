import Image from 'next/image'
import React from 'react'
import FullLogo from "assets/images/logo-large.svg"

const Logo = (): React.JSX.Element => {
    return (
        <div>
            <Image src={FullLogo} alt='main logo' priority />
        </div>
    )
}

export default Logo