import Checkbox from './Checkbox'

const Filter = () => {
  return (
    <div className="hidden w-80 flex-grow sm:hidden md:inline">
      <div>
        <h3 className="text-lg text-black">Category</h3>
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
            <div className="flex flex-nowrap items-center text-sm lg:text-xl">
              <div>Lower than</div> <div className="ml-2 text-sm">$</div>20
            </div>
          </div>
          <div className="mb-8 flex items-center space-x-2">
            <Checkbox value={'peope'} />
            <div className="flex items-center text-sm lg:text-xl">
              <div className="text-sm">$</div>20 -{' '}
              <span className="ml-2 text-sm">$</span>100{' '}
            </div>
          </div>
          <div className="mb-8 flex items-center space-x-2">
            <Checkbox value={'peope'} />
            <div className="flex flex-nowrap items-center text-sm lg:text-xl">
              <div className="text-sm">$</div>100 -{' '}
              <span className="ml-2 text-sm">$</span>200{' '}
            </div>
          </div>
          <div className="mb-8 flex items-center space-x-2">
            <Checkbox value={'peope'} />
            <div className="flex items-center text-sm lg:text-xl">
              More than <div className="ml-2 text-sm">$</div>200
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
