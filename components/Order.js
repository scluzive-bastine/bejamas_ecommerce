import Image from 'next/image'

const Order = ({ time, total, shipping, images, transactionId }) => {
  return (
    <div className="mb-10 flex-col border border-gray-200">
      <div className="flex items-center justify-between bg-gray-200 p-3">
        <div>
          <div className="text-sm font-semibold uppercase">Order Placed</div>
          <div className="text-xs text-gray-500">{time}</div>
        </div>
        <div>
          <div className="w-40 truncate whitespace-nowrap text-xs text-gray-500 md:w-72">
            <span className="uppercase">Order # </span> {transactionId}
          </div>
          <div className="">
            <div className="text-xs">
              <span className="uppercase">Total: </span> <span>${total}</span>
            </div>
            <div className="mt-2 text-xs">
              <span className="rounded bg-teal-600 p-1 font-bold uppercase text-white">
                Next-day Shipping: <span>${shipping}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="block w-full space-y-4 p-3 md:flex md:space-y-0 md:space-x-4">
        {JSON.parse(images).map((image, i) => (
          <div
            className="relative h-[300px] w-full md:h-[250px] md:w-[200px]"
            key={i}
          >
            <Image
              src={image}
              objectFit="cover"
              layout="fill"
              key={i}
              alt={image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
