import { type FC } from 'react'
interface Props {
    title: string
}
const Menu: FC<Props> = ({ title }) => {
    return (
        <div className='text-2xl'>{title}</div>
    )
}

export default Menu