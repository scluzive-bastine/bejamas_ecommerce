import Image from "next/image"
import Header from "../components/Header"
import { useSelector, useDispatch } from "react-redux"
import { decreaseItemCount, deleteItemFromBasket, increaseItemCount, selectItems, selectTotal } from "../slices/basketSlice"
import { currencyTransform } from "../utils/functions"
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline"
import { urlFor } from "../sanity"

const checkout = () => {

    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    
    const dispatch = useDispatch();
    const deleteItemFromCart = (id: any) => {        
        dispatch(deleteItemFromBasket({id}))
    }

    const increaseItemInCart = (id: any) => {        
        dispatch(increaseItemCount({id}))
    }

    const decreaseItemInCart = (id: any) => {
        dispatch(decreaseItemCount({id}))
    }
    
  return (
      <div className="bg-white max-w-screen-2xl mx-auto font-archivo">
          <Header />
          
          <main className="py-8 sm:py-20 relative px-4 sm:px-8">
              <div className="mt-10 block lg:flex justify-between md:space-x-10">
                  <div className="flex-grow">
                      <div className="flex justify-between items-center mb-10 md:mb-0 border-b md:border-0 border-gray-200 pb-2">
                          <div>
                            <h1 className="text-2xl text-black md:mb-10 ">Products in cart</h1>
                            <div className="lg:hidden">
                                <div className="mb-1">Subtotal: { total.quantity}</div>
                                <div>Total Price: { total.total > 0 ? "$" + total.total : "0"}</div>
                            </div>
                          </div>
                          <div className="lg:hidden">
                            <button className="button mt-2 mx-auto">Checkout</button>
                        </div>
                      </div>
                      {items.length > 0 ? (
                          items.map((item: any) => (
                            <div className="flex-col border-b mb-8 border-gray-200 pb-4 group" key={item.name}>
                                <div className="block md:flex justify-between items-center">
                                  <div className="flex space-x-3 items-center">
                                    <div className="relative h-[60px] w-[120px] md:h-[100px] md:w-[200px]">
                                      <Image src={urlFor(item.image.asset._ref).url()} objectFit="cover" layout="fill" alt={item.name} className="group-hover:scale-110 transition-transform duration-200 ease-in-out" />
                                    </div>
                                      <div>
                                              <div className="text-lg md:text-2xl text-black">{item.name}</div>
                                        <div className="text-xs text-gray-500">{item.category.title}</div>
                                    </div>
                                  </div>  
                                  <div className="flex space-x-4 md:space-x-10 items-center mt-2 md:mt-0">
                                      <div className="flex space-x-2 items-center">
                                          <div className="cursor-pointer p-2 hover:bg-gray-100 transition duration-150 rounded" onClick={() => decreaseItemInCart(item._id)}>
                                              <MinusIcon className="h-5" />
                                          </div>
                                          <div>
                                              <div className="border border-gray-200 p-2 font-semibold text-black rounded w-10 h-10 text-center">{ item.quantity} </div>
                                          </div>
                                          <div className="cursor-pointer p-2 hover:bg-gray-100 transition duration-150 rounded" onClick={() => increaseItemInCart(item._id)}>
                                              <PlusIcon className="h-5" />
                                          </div>
                                      </div>
                                      <div className="text-lg font-bold text-black w-16 md:w-20 text-center"><span className="text-sm">{currencyTransform(item.currency)}</span>{ item.price}</div>
                                      <div className="cursor-pointer text-red-500 hover:text-red-700 transition duration-150" onClick={() => deleteItemFromCart(item._id)}>
                                          <TrashIcon className="h-6" />
                                      </div>
                                  </div>
                                </div>
                            </div>
                        ))
                      ): (
                          <div className="text-center text-black mt-10 text-lg">No items in cart</div>
                      ) }
                  </div>
                <div className="w-full md:w-80 p-4 bg-gray-200 hidden lg:flex items-center justify-center h-full">
                    <div>
                        <h1 className="text-2xl text-center font-bold mb-8">Cart Summary</h1>
                          <div>
                            <div className="mb-2">Subtotal: { total.quantity}</div>
                            <div className="border-b border-gray-200 pb-2">Total Price: { total.total > 0 ? "$" + parseFloat(total.total.toFixed(2)) : "0"}</div>
                            <button className="button mt-2 mx-auto">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
              </div>
          </main>
     </div>
      
  )
}

export default checkout