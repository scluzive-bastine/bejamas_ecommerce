import Checkbox from './Checkbox'
import { XIcon } from '@heroicons/react/outline'
const MobileFilter = () => {
  return (
    <div
      className="trasnition sticky bottom-0 z-40 h-screen w-full transform overflow-scroll bg-gray-100 duration-700 ease-in-out"
      style={{ background: '#0000007a' }}
    >
      <div
        className="absolute bottom-0 w-full overflow-scroll bg-white"
        style={{ height: '70vh' }}
      >
        <div className="sticky top-0 flex items-center justify-between bg-white py-4 px-5">
          <h3 className="text-2xl font-bold text-black">Filter </h3>
          <div
            className="cursor-pointer px-2 py-2"
            onClick={() => setShowFilter(false)}
          >
            <XIcon className="h-6 text-black" />
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
        <div className="sticky bottom-0 flex justify-between border-t-4 border-gray-300 bg-white px-5 pb-5 pt-5">
          <button className="border-2 border-black px-8 py-2 uppercase text-black">
            Clear
          </button>
          <button className="button">Save</button>
        </div>
      </div>
    </div>
  )
}

export default MobileFilter
