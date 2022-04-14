import Head from 'next/head'
import Header from '../components/Header'
import Featured from '../components/Featured'
import Filter from '../components/Filter'
import Products from '../components/Products'
import filterIcon from '../images/filter.svg'
import data from '../products.json'
import { useState } from 'react'
import Image from 'next/image'
import Checkbox from '../components/Checkbox'
import { ArrowNarrowDownIcon, ArrowNarrowUpIcon, ChevronDownIcon, XIcon } from '@heroicons/react/outline'

export default function Home()  {
  const [products, setProducts] = useState(data)

  const featuredProduct = products.filter((item) => (
    item.featured === true
  ))

  const [showFilter, setShowFilter] = useState(false);
  const [showCart, setShowCart] = useState(false);

  
  return (
    <div className="bg-white max-w-screen-2xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setShowCart={setShowCart} />

      <main className='py-8 sm:py-20 relative px-4 sm:px-0'>
        {/* Cart */}
        {showCart && (
          <div className="absolute right-0 top-0 p-5 w-[300px] md:w-[433px] h-80 bg-white z-20 shadow-md">
            <div className="px-2 py-2 mb-2 cursor-pointer flex justify-end" onClick={() => setShowCart(false)}>
              <XIcon className='h-6 text-black' />
            </div>
            <div className="flex items-center">
              <div className='grow'>
                <h3 className='text-sm md:text-lg text-black font-semibold'>Samurai King Resting</h3>
                <div className="flex items-center text-lg font-light text-gray-500">
                  <span className="text-sm">$</span>
                  100
                </div>
              </div>
              <div>
                <Image src={featuredProduct[0].image.src} height={80} width={146} objectFit='contain' />
              </div>
            </div>
            <div className="mt-4 border-b border-gray-200"></div>
            <button className="button-outline w-full mt-8">Clear</button>
          </div>
        )}
        {/* Cart */}

        {/* FEATURED PRODUCT */}
        <div className='border-b-2 border-gray-300 pb-20'>
          <Featured featured={featuredProduct} />
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
                <div className='text-gray-400 flex items-center space-x-1'>
                  <div className="flex">
                    <ArrowNarrowDownIcon className='h-5' /> <ArrowNarrowUpIcon className='h-5' /> 
                  </div>
                  Sory By</div>
              <div className='flex items-center space-x-2 text-black'><div>Price</div> <ChevronDownIcon className='h-5' /> </div>
              </div>
            </div>
          </div>

          <div className="md:flex md:flex-row mt-10">
            <Filter />
            <Products products={products} setShowCart={setShowCart} />
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
