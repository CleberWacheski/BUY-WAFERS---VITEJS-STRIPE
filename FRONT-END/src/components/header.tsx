import Logo from '../assets/logo.png'
import { BiSearch } from 'react-icons/bi'
import { FaShoppingBag } from 'react-icons/fa'

export const Header = () => {
    return (
        <header className='flex items-center justify-between mt-4 text-sm'>
            <div>
                <img src={Logo} alt="logo da marca balaji" className='w-28' />
            </div>

            <nav>
                <ul className='flex items-center gap-16 font-bold font-poppins'>
                    <li><a className='cursor-pointer hover:text-yellow-500'>HOME</a></li>
                    <li><a className='cursor-pointer hover:text-yellow-500'>ABOUT</a></li>
                    <li><a className='cursor-pointer hover:text-yellow-500'>CHIPS</a></li>
                    <li><a className='cursor-pointer hover:text-yellow-500'>SERVICES</a></li>
                </ul>
            </nav>

            <div className='bg-black px-4 py-2 rounded-full text-white justify-center flex items-center gap-3 '>
                <label htmlFor="search">
                    <BiSearch size={25} />
                </label>
                <input
                    type="text" id='search' placeholder='Buscar'
                    className='bg-transparent border-none outline-none placeholder:font-poppins placeholder:text-white font-light w-48'
                />
                <div className='flex items-center justify-center'>
                    <div className='border-l border-gray-400 w-1 mr-1 h-8' />
                    <FaShoppingBag size={20} className='cursor-pointer hover:text-yellow-500' />
                </div>
            </div>

        </header>
    )
}
