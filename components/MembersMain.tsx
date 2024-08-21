import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { BorderBeam } from '@/components/magicui/border-beam'

const Member = ({ name, role, image }) => {
	return (
		<div className="flex flex-col items-center gap-5" id="members">
			<div className="relative overflow-hidden rounded-full border border-white border-opacity-20 p-3">
				<BorderBeam duration={20} size={500} />
				<img
					alt={name}
					src={image}
					className="h-60 rounded-full object-contain"
				/>
			</div>
			<p className="font-decorative text-5xl font-medium uppercase tracking-widest text-white">
				{name}
			</p>
			<p className="text-wrap text-lg font-light text-zinc-400">{role}</p>
		</div>
	)
}

const MembersMain = () => {
	return (
		<div className=" grid w-full gap-10 p-20 text-center" id="members">
			<h2 className="font-display text-7xl font-extralight transition duration-200 ease-in-out group-hover:text-opacity-50">
				Members
			</h2>
			<div className="relative h-full w-full">
				<div className="absolute inset-x-0 top-0 z-0 h-full w-full">
					<div className="relative h-full w-full">
						<div className="absolute inset-x-[12.5%] top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-primary-500 to-transparent blur-sm" />
						<div className="absolute inset-x-[12.5%] top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
						<div className="absolute inset-x-[37.5%] top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-secondary-500 to-transparent blur-sm" />
						<div className="absolute inset-x-[37.5%] top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-secondary-500 to-transparent" />
						<SparklesCore
							background="transparent"
							minSize={0.4}
							maxSize={1}
							particleDensity={120}
							className="h-full w-full"
							particleColor="#FFFFFF"
						/>
						<div className="absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
					</div>
				</div>
				<div className="z-10 mt-10 flex flex-col gap-10">
					<p className="text-xl font-light  text-white">
						We are four young and enthusiastic Blockchain Developers who are now
						proud to be the{' '}
						<span className="bg-gradient-to-tr from-primary-400 to-secondary-400 bg-clip-text text-transparent">
							ArismLab Members
						</span>
					</p>
					<div className="grid grid-cols-4 gap-10">
						<Member
							name="Bea Hayden"
							role="Business Development Executor, Game Developer, Blockchain Engineer"
							image="/static/avatar.png"
						/>
						<Member
							name="Helen Smith"
							role="Product Management, Community Manager, UX/UI Designer"
							image="/static/avatar.png"
						/>
						<Member
							name="Kiet Tran"
							role="DevOps Engineer, Backend Developer, Smart Contract Engineer"
							image="/static/avatar.png"
						/>
						<Member
							name="Thuan Nguyen"
							role="Security Engineer, Fullstack Developer, Smart Contract Engineer"
							image="/static/avatar.png"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MembersMain
