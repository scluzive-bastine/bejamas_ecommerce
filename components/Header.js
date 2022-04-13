import Image from 'next/image'
import logo from '../images/logo.svg'
import { ShoppingCartIcon } from '@heroicons/react/outline'
const Header = () => {
  return (
    <header className="flex flex-grow items-center justify-between border-b-2 border-gray-300 p-1 py-5">
      <div className="mt-2 flex flex-grow items-center sm:flex-grow-0">
        <Image
          src={logo}
          width={159}
          height={26}
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
      <div className="relative">
        <ShoppingCartIcon className="h-10" />
        <span className=" absolute bottom-0 right-0 h-4 w-4 bg-black text-center text-xs text-white">
          0
        </span>
      </div>
    </header>
  )
}

export default Header
