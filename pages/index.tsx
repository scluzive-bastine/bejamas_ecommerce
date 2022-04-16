import Head from 'next/head'
import Header from '../components/Header'
import Featured from '../components/Featured'
import Content from '../components/Content'
import MobileFilter from '../components/MobileFilter'
import filterIcon from '../images/filter.svg'
import Cart from '../components/Cart'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowNarrowDownIcon, ArrowNarrowUpIcon } from '@heroicons/react/outline'
import { useProductContext } from '../context/context'


export default function Home() {
  const { isCartOpen, sortProducts } = useProductContext()
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const [value, setValue] = useState("name");
  const [currentSort, setCurrentSort] = useState(null);
  const isAsc = currentSort === "asc" && "active";
  const isDesc = currentSort === "desc" && "active";

  const handleChange = (e) => {
    setCurrentSort(null)
    setValue(e.target.value)
  }

  const toggleSort = (order) => {
    setCurrentSort(order);
    const payload = {
      key: value,
      order
    }
    sortProducts(payload)
  }
  
  const showMobileFilter = () => {
    setIsMobileFilterOpen((prev) => !prev)
  }

  return (
    <div className="bg-white max-w-screen-2xl mx-auto">
      <Head>
        <title>Bejmas Test by Sabastine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className='py-8 sm:py-20 relative px-4 sm:px-8 font-archivo'>
        {/* Cart */}
        {isCartOpen && (
          <Cart />
        )}
        {/* Cart */}


        {/* FEATURED PRODUCT */}
        
        <div className='border-b-2 border-gray-300 pb-20'>
          <Featured />
        </div>

                {/* PRODUCTS */}
        <div className='mt-10'>
          <div className="flex justify-between items-center">
            <div className='text-lg md:text-3xl text-black font-bold'>Photograpy / <span className='text-gray-700 font-light'>Premium Photos</span> </div>
            <div className="md:hidden flex items-center cursor-pointer h-[30] w-[30] relative" onClick={showMobileFilter}>
                <Image src={filterIcon} height={30} width={30} layout="fill" objectFit="contain" alt="filter icon" />
            </div>
            <div className='hidden md:inline'>
              <div className="flex items-center space-x-2">
                <div className='flex items-center'>
                  <div className="flex items-center">
                    <div className='cursor-pointer' onClick={() => toggleSort("asc")}>
                      <ArrowNarrowUpIcon className={`h-5 w-5 ${isAsc ? "text-black" : "text-gray-500"}`}  />
                    </div>
                    <div className='cursor-pointer' onClick={() => toggleSort("desc")}>
                      <ArrowNarrowDownIcon className={`h-5 w-5 ${isDesc ? "text-black" : "text-gray-500"}`} />
                    </div>
                  </div>
                  <div className='text-gray-700 flex items-center space-x-1 text-lg'>
                    Sort By
                  </div>
                </div>
                <div className='flex items-center space-x-2 text-black text-lg font-normal'>
                  <select name="sortType" className='outline-none border-0 ring-0' value={value} onChange={handleChange}>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                  </select>
              </div>
              </div>
            </div>
          </div>

          <Content />
        </div>
        

      </main>

         {isMobileFilterOpen && ( <MobileFilter toggleModal={showMobileFilter} />)}
    </div>
  )
}
