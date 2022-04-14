import Head from 'next/head'
import Header from '../components/Header'
import Featured from '../components/Featured'
import Filter from '../components/Filter'
import Products from '../components/Products'
import filterIcon from '../images/filter.svg'
import Cart from '../components/Cart'
import { useContext, useState } from 'react'
import Image from 'next/image'
import Checkbox from '../components/Checkbox'
import { ArrowNarrowDownIcon, ArrowNarrowUpIcon, ChevronDownIcon, SwitchVerticalIcon } from '@heroicons/react/outline'
import { ProductContext } from '../context/context'
export default function Home() {
  const {setShowCart, showCart, featuredProduct, setShowFilter, showFilter, setSortType} = useContext(ProductContext)

    
  return (
    <div className="bg-white max-w-screen-2xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setShowCart={setShowCart} />

      <main className='py-8 sm:py-20 relative px-4 sm:px-8'>
        {/* Cart */}
        {showCart && (
          <Cart />
        )}
        {/* Cart */}

        {/* FEATURED PRODUCT */}
        <div className='border-b-2 border-gray-300 pb-20'>
          <Featured featured={featuredProduct}/>
        </div>

        {/* PRODUCTS */}
        <div className='mt-10'>
          <div className="flex justify-between items-center">
            <div className='text-lg md:text-3xl text-black'>Photograpy / <span className='text-gray-400 font-light'>Premium Photos</span> </div>
            <div className="md:hidden flex items-center cursor-pointer" onClick={() => setShowFilter(true)}>
                <Image src={filterIcon} height={30} width={30} />
            </div>
            <div className='hidden md:inline'>
              <div className="flex items-center space-x-3 ">
                <div className='text-gray-400 flex items-center space-x-1 text-lg'>
                    <SwitchVerticalIcon className='h-5' />
                  {/* Sort By */}
                </div>
                <div className='flex items-center space-x-2 text-black text-lg'>
                  <select name="sortType" className='outline-none border-0 ring-0' onChange={(e) => setSortType(e.target.value)}>
                    <option value="">Sort By</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                    <option value="price">Price</option>
                  </select>
              </div>
              </div>
            </div>
          </div>

          <div className="flex flex-grow mt-10">
            <Filter />
            <Products />
          </div>
        </div>
      </main>
        {/* Mobile Filter */}
      {showFilter && (
         <div className='h-screen bg-gray-100 w-full sticky bottom-0 z-40 overflow-scroll trasnition transform duration-700 ease-in-out' style={{background: "#0000007a"}}>
            <div className='bg-white w-full absolute bottom-0 overflow-scroll' style={{height: "70vh"}}>
              <div className="flex py-4 justify-between items-center px-5 sticky top-0 bg-white">
                <h3 className='text-2xl font-bold text-black'>Filter </h3>
                <div className="px-2 py-2 cursor-pointer" onClick={() => setShowFilter(false)}>
                  <XIcon className='h-6 text-black' />
                </div>
              </div>
              <div className="mt-10 px-5">
                <div className="mt-8">
                  <div className="mb-8 flex items-center space-x-2">
                    <Checkbox value={'peope'} />
                    <div className="text-xl">People</div>
                  </div>
                  <div className="mb-8 flex items-center space-x-2">
                    <Checkbox value={'premium'} />
                    <div className="text-xl">Premium</div>
                  </div>
                  <div className="mb-8 flex items-center space-x-2">
                    <Checkbox value={'pets'} />
                    <div className="text-xl">Pet</div>
                  </div>
                  <div className="mb-8 flex items-center space-x-2">
                    <Checkbox value={'food'} />
                    <div className="text-xl">Food</div>
                  </div>
                  <div className="mb-8 flex items-center space-x-2">
                    <Checkbox value={'landmarks'} />
                    <div className="text-xl">Landmarks</div>
                  </div>
                  <div className="mb-8 flex items-center space-x-2">
                    <Checkbox value={'cities'} />
                    <div className="text-xl">Cities</div>
                  </div>
                  <div className="mb-8 flex items-center space-x-2">
                    <Checkbox value={'nature'} />
                    <div className="text-xl">Nature</div>
                  </div>
                </div>
                <div className="mt-8 mb-8 border-b-2 border-gray-500"></div>
                <div className="mt-5">
                  <h3 className="mb-8">Price Range</h3>
                  <div className="mb-8 flex items-center space-x-2">
                    <Checkbox value={'peope'} />
                    <div className="flex items-center text-xl">
                      Lower than <div className="ml-2 text-sm">$</div>20
                    </div>
                  </div>
                  <div className="mb-8 flex items-center space-x-2">
                    <Checkbox value={'peope'} />
                    <div className="flex items-center text-xl">
                      <div className="ml-2 text-sm">$</div>20 -{' '}
                      <span className="ml-2 text-sm">$</span>100{' '}
                    </div>
                  </div>
                  <div className="mb-8 flex items-center space-x-2">
                    <Checkbox value={'peope'} />
                    <div className="flex items-center text-xl">
                      <div className="ml-2 text-sm">$</div>100 -{' '}
                      <span className="ml-2 text-sm">$</span>200{' '}
                    </div>
                  </div>
                  <div className="mb-8 flex items-center space-x-2">
                    <Checkbox value={'peope'} />
                    <div className="flex items-center text-xl">
                      More than <div className="ml-2 text-sm">$</div>200
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between border-t-4 pb-5 border-gray-300 pt-5 px-5 sticky bottom-0 bg-white">
                <button className='button-outline'>Clear</button>
                <button className="button">Save</button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}
