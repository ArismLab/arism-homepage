import React from 'react'
import Image from '@components/Image'
import Link from '@components/Link'

const Header = () => {
  return (
    <div className="flex w-screen">
      <Link className="group m-5 p-5" href="/">
        <div className="flex items-center gap-5">
          <Image
            alt="Arism logo"
            src="/static/logo.png"
            width={60}
            height={60}
            className="transition duration-200 ease-in-out group-hover:opacity-50"
          />
          <h1 className="text-2xl font-extralight text-black transition duration-200 ease-in-out group-hover:text-opacity-50">
            ARISM LAB
          </h1>
        </div>
      </Link>
    </div>
  )
}

export default Header
