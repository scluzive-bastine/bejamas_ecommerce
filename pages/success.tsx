import { CheckCircleIcon, CheckIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
import Header from "../components/Header"

const success = () => {
    const router = useRouter()
  return (
      <div className="bg-white max-w-screen-2xl mx-auto font-archivo">
          <Header />

          <div className="flex justify-center items-center mt-40 w-full">
              <div className="mx-auto w-full md:w-1/2 border border-gray-200">
                  <div className="text-center p-8">
                      <div className="flex justify-center">
                          <CheckCircleIcon className="h-20 text-green-700 text-center" />
                      </div>
                      <h1 className="text-2xl font-semibold mt-5">Thank you for your order!</h1>
                      <p className="text-gray-500">
                            Thank you for shopping with us, We'll send a confirmation when item
                            has shipped, if you would like to check the status of the order(s)
                            please press the link below
                      </p>
                      <button className="button mt-5" onClick={() => router.push('/orders')}>Go to orders</button>
                    </div>
              </div>
        </div>

    </div>
  )
}

export default success