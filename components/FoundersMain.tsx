import React from 'react'

const FoundersMain = () => {
  return (
    <div className="grid w-screen gap-10 p-20 text-center">
      <p className=" text-5xl font-semibold text-black">FOUNDERS</p>
      <p className="text-2xl font-light text-gray-500">
        We are three young and enthusiastic Blockchain Developers who are now
        proud to be the{' '}
        <span className="bg-gradient-to-tr from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          Arism Lab founders
        </span>
        .
      </p>
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center gap-5">
          <div className="rounded-full border border-black border-opacity-20 p-3">
            <img
              alt="Nhi Tran"
              src="/static/avatar.png"
              className="h-60 rounded-full object-contain"
            />
          </div>
          <p className="text-4xl font-medium tracking-widest text-black">
            NHI TRAN
          </p>
          <p className="text-xl font-light text-gray-500">
            Business Development Executor, Game Developer, Blockchain Engineer
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="rounded-full border border-black border-opacity-20 p-3">
            <img
              alt="Kiet Tran"
              src="/static/avatar.png"
              className="h-60 rounded-full object-contain"
            />
          </div>
          <p className="text-4xl font-medium tracking-widest text-black">
            KIET TRAN
          </p>
          <p className="text-xl font-light text-gray-500">
            DevOps Engineer, Backend Developer, Smart Contract Engineer
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="rounded-full border border-black border-opacity-20 p-3">
            <img
              alt="Thuan Nguyen"
              src="/static/avatar.png"
              className="h-60 rounded-full object-contain"
            />
          </div>
          <p className="text-4xl font-medium tracking-widest text-black">
            THUAN NGUYEN
          </p>
          <p className="text-xl font-light text-gray-500">
            Security Engineer, Fullstack Developer, Smart Contract Engineer
          </p>
        </div>
      </div>
    </div>
  )
}

export default FoundersMain
