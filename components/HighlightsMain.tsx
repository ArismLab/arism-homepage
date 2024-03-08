import React from 'react'

const HighlightsMain = () => {
  return (
    <div className="grid h-[1000px] w-screen grid-rows-2 divide-y divide-black divide-opacity-20 border-y border-black border-opacity-20">
      <div className="grid h-full grid-cols-2 divide-x divide-black divide-opacity-20">
        <div className="relative ml-auto h-full w-[70%]">
          <div className="absolute bottom-14 right-14 space-y-10 text-center">
            <div className="">
              <p className="text-lg font-semibold text-gray-400">
                ONE-CLICK LOGIN VIA THIRD-PARTY PLATFORM
              </p>
              <p className="bg-gradient-to-tr from-primary-600 to-secondary-600 bg-clip-text text-6xl font-light text-transparent">
                friendliness
              </p>
            </div>
            <div className="space-y-5 leading-relaxed tracking-wide text-gray-500">
              <p>
                {`Arism Wallet is a distributed key and identifier management
                    protocol powered by Zero Knowledge.`}
              </p>
              <p>{` This decentralized wallet
                    application uses advanced cryptographic algorithms to ensure
                    the security and integrity of user's private keys.`}</p>
            </div>
          </div>
        </div>

        <div className="relative mr-auto h-full w-[70%]">
          <div className="absolute bottom-14 left-14 space-y-10 text-center">
            <div className="">
              <p className="text-lg font-semibold text-gray-400">
                EASY RECOVERY WITH MULTI-FACTOR AUTHENTICATION
              </p>
              <p className="bg-gradient-to-tr from-primary-600 to-secondary-600 bg-clip-text text-6xl font-light text-transparent">
                loss prevention
              </p>
            </div>
            <div className="space-y-5 leading-relaxed tracking-wide text-gray-500">
              <p>
                {`Arism Wallet is a distributed key and identifier management
                    protocol powered by Zero Knowledge.`}
              </p>
              <p>{` This decentralized wallet
                    application uses advanced cryptographic algorithms to ensure
                    the security and integrity of user's private keys.`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 grid h-full grid-cols-2 divide-x divide-black divide-opacity-20">
        <div className="relative ml-auto h-full w-[70%]">
          <div className="absolute right-14 top-14 space-y-10 text-center">
            <div className="">
              <p className="text-lg font-semibold text-gray-400">
                PROTECTED BY A DISTRIBUTED BLOCKCHAIN NETWORK
              </p>
              <p className="bg-gradient-to-tr from-primary-600 to-secondary-600 bg-clip-text text-6xl font-light text-transparent">
                security
              </p>
            </div>
            <div className="space-y-5 leading-relaxed tracking-wide text-gray-500">
              <p>
                {`Arism Wallet is a distributed key and identifier management
                    protocol powered by Zero Knowledge.`}
              </p>
              <p>{` This decentralized wallet
                    application uses advanced cryptographic algorithms to ensure
                    the security and integrity of user's private keys.`}</p>
            </div>
          </div>
        </div>

        <div className="relative mr-auto h-full w-[70%]">
          <div className="absolute left-14 top-14 space-y-10 text-center">
            <div className="">
              <p className="text-lg font-semibold text-gray-400">
                DISTRIBUTED IDENTIFIER & ACCOUNT ABSTRACTION INTEGRATION
              </p>
              <p className="bg-gradient-to-tr from-primary-600 to-secondary-600 bg-clip-text text-6xl font-light text-transparent">
                feature variety
              </p>
            </div>
            <div className="space-y-5 leading-relaxed tracking-wide text-gray-500">
              <p>
                {`Arism Wallet is a distributed key and identifier management
                    protocol powered by Zero Knowledge.`}
              </p>
              <p>{` This decentralized wallet
                    application uses advanced cryptographic algorithms to ensure
                    the security and integrity of user's private keys.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlightsMain
