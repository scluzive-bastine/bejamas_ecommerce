import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import bg from '../../images/signBg.png'
import { getProviders, signIn } from 'next-auth/react'

const SignIn = ({ providers }) => {
  return (
    <div className="relative mx-auto grid h-screen w-full flex-grow grid-cols-1 place-items-center bg-teal-500 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="relative h-[200px] w-[200px] sm:h-[200px] sm:w-[300px] md:h-[450px] md:w-[450px] lg:h-[900px] lg:w-[900px]">
        <Image
          src={bg}
          layout="fill"
          objectFit="contain"
          className="absolute top-64 z-20 lg:-right-56"
        />
      </div>
      <div className="h-full w-full bg-white p-5 lg:rounded-tl-3xl lg:rounded-bl-3xl">
        <div className="grid h-full place-items-center">
          <div className=" p-5">
            <h1 className="mb-10 text-center text-3xl font-semibold">
              Sign In
            </h1>
            {Object.values(providers).map((provider) => (
              <div className="mx-auto mt-4 w-64" key={provider.name}>
                <div
                  className="flex flex-grow cursor-pointer items-center justify-center space-x-2 rounded-lg border py-3 transition duration-150 ease-in-out hover:shadow-md"
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                >
                  <FcGoogle className="text-xl" />{' '}
                  <span className="text-xl"> {provider.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
