import Image from "next/image"

import Logo from '@/assets/logo.svg'

export function Header() {
    return(
        <header className='bg-gray-800 flex justify-center py-5 items-center gap-5'>
            <Image src={Logo} alt='Logo do Ignite' />
            <p className='text-white text-2xl font-bold'>Ignite Feed</p>
        </header>
    )
}