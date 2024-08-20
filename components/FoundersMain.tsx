import React from 'react'

const FoundersMain = () => {
	return (
		<div className="grid w-screen gap-10 p-20 text-center">
			<h2 className="font-display text-7xl font-extralight transition duration-200 ease-in-out group-hover:text-opacity-50">
				Founders
			</h2>
			<p className="text-xl font-light  text-white">
				We are four young and enthusiastic Blockchain Developers who are now
				proud to be the{' '}
				<span className="bg-gradient-to-tr from-primary-400 to-secondary-400 bg-clip-text text-transparent">
					ArismLab founders
				</span>
			</p>
			<div className="grid grid-cols-4 gap-10">
				<div className="flex flex-col items-center gap-5">
					<div className="rounded-full border border-white border-opacity-20 p-3">
						<img
							alt="Bea Hayden"
							src="/static/avatar.png"
							className="h-60 rounded-full object-contain"
						/>
					</div>
					<p className="font-decorative text-5xl font-medium tracking-widest text-white">
						BEA HAYDEN
					</p>
					<p className="text-wrap text-lg font-light text-primary-400">
						Business Development Executor, Game Developer, Blockchain Engineer
					</p>
				</div>
				<div className="flex flex-col items-center gap-5">
					<div className="rounded-full border border-white border-opacity-20 p-3">
						<img
							alt="Helen Smith"
							src="/static/avatar.png"
							className="h-60 rounded-full object-contain"
						/>
					</div>
					<p className="font-decorative text-5xl font-medium tracking-widest text-white">
						HELEN SMITH
					</p>
					<p className="text-wrap text-lg font-light text-primary-400">
						Product Management, Community Manager, UX/UI Designer
					</p>
				</div>
				<div className="flex flex-col items-center gap-5">
					<div className="rounded-full border border-white border-opacity-20 p-3">
						<img
							alt="Kiet Tran"
							src="/static/avatar.png"
							className="h-60 rounded-full object-contain"
						/>
					</div>
					<p className="font-decorative text-5xl font-medium tracking-widest text-white">
						KIET TRAN
					</p>
					<p className="text-wrap text-lg font-light text-primary-400">
						DevOps Engineer, Backend Developer, Smart Contract Engineer
					</p>
				</div>
				<div className="flex flex-col items-center gap-5">
					<div className="rounded-full border border-white border-opacity-20 p-3">
						<img
							alt="Thuan Nguyen"
							src="/static/avatar.png"
							className="h-60 rounded-full object-contain"
						/>
					</div>
					<p className="font-decorative text-5xl font-medium tracking-widest text-white">
						THUAN NGUYEN
					</p>
					<p className="text-wrap text-lg font-light text-primary-400">
						Security Engineer, Fullstack Developer, Smart Contract Engineer
					</p>
				</div>
			</div>
		</div>
	)
}

export default FoundersMain
