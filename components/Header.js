import Image from 'next/image'
import logo from '../images/logo.svg'
import {
  LogoutIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import { useProductContext } from '../context/context'
import { useSession, signIn, signOut } from 'next-auth/react'

const Header = () => {
  const items = useSelector(selectItems)
  const { toggleCart, toggleUserDropdown, isUserDropdownOpen } =
    useProductContext()
  const { data: session } = useSession()

  return (
    <header className="relative flex flex-grow items-center justify-between border-b-2 border-gray-300 p-1 py-5 px-2 sm:px-8">
      <div className="relative mt-2 flex h-[26px] w-[159px] items-center sm:flex-grow-0">
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
      <div className="flex items-center space-x-4">
        <div className="hidden md:inline">
          {!session ? (
            <button className="button" onClick={signIn}>
              Sign In
            </button>
          ) : (
            <div
              className="cursor-pointer hover:underline"
              onClick={toggleUserDropdown}
            >
              {session.user.name}
            </div>
          )}
        </div>
        <div className="cursor-pointer md:hidden" onClick={toggleUserDropdown}>
          <UserCircleIcon className="h-10" />
        </div>
        <div className="relative cursor-pointer" onClick={toggleCart}>
          <ShoppingCartIcon className="h-10" />
          <span className=" absolute bottom-0 right-0 h-4 w-4 bg-black text-center text-xs text-white">
            {items.length}
          </span>
        </div>
      </div>
      {isUserDropdownOpen && (
        <div className="absolute right-20 top-14 z-10 w-48 bg-white py-3 shadow-md">
          <div
            className="cursor-pointer px-2 py-3 hover:bg-gray-100"
            onClick={signOut}
          >
            <div className="flex items-center space-x-2">
              <LogoutIcon className="h-5" /> <span>Sign Out</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
