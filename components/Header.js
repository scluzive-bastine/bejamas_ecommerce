import Image from 'next/image'
import logo from '../images/logo.svg'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import { useProductContext } from '../context/context'

const Header = () => {
  const items = useSelector(selectItems)
  const { toggleCart } = useProductContext()
  return (
    <header className="flex flex-grow items-center justify-between border-b-2 border-gray-300 p-1 py-5 px-2 sm:px-8">
      <div className="relative mt-2 flex h-[26px] w-[159px] flex-grow items-center sm:flex-grow-0">
        <Image
          src={logo}
          width={159}
          height={26}
          layout="fill"
          objectFit="contain"
          className="cursor-pointer"
          alt="Bejamas Logo"
        />
      </div>
      <div className="relative cursor-pointer" onClick={toggleCart}>
        <ShoppingCartIcon className="h-10" />
        <span className=" absolute bottom-0 right-0 h-4 w-4 bg-black text-center text-xs text-white">
          {items.length}
        </span>
      </div>
    </header>
  )
}

export default Header
