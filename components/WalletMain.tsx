import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import Card from '@components/Card'

const WalletMain = () => {
  return (
    <div className="w-screen bg-white">
      <div className="h-10 bg-white"></div>
      <div className="flex h-[400px] place-items-center gap-20 p-10">
        <img
          alt="Arism logo"
          src="/static/logo-icon.png"
          className="ml-auto h-[100%] rounded-xl object-contain transition duration-200 ease-in-out group-hover:opacity-50"
        />
        <div className="mr-auto w-2/5 space-y-10">
          <div className="">
            <p className="text-lg font-semibold text-gray-400">
              HYPER WALLET PROTOCOL
            </p>
            <p className="bg-gradient-to-tr from-primary-600 to-secondary-600 bg-clip-text text-6xl font-light text-transparent">
              Arism Wallet
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
            <div className="ml-auto w-fit text-gray-500">
              <Card className="relative flex place-items-center gap-3 px-6 py-3 text-lg group-hover:font-normal group-hover:text-primary-800">
                <p>Try out</p>
                <AiOutlineRight className="text-xl" />
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 bg-white"></div>
    </div>
  )
}

export default WalletMain
