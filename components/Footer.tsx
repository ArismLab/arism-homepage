import React from 'react'
import siteMetadata from '@data/siteMetadata.json'
import * as Icons from 'react-icons/fa'

const Footer = () => {
	return (
		<div className="relative mt-20 grid w-screen grid-cols-2 place-items-center items-center">
			<div className="absolute bottom-14 right-1/4 h-32 w-32 rotate-45 bg-primary-400"></div>
			<div className="absolute left-1/4 top-14 h-20 w-20 rotate-45 bg-primary-400"></div>
			<div className="flex flex-col gap-5 px-32 text-left">
				<h3 className="font-display text-4xl font-extralight transition duration-200 ease-in-out group-hover:text-opacity-50">
					<span className="text-white">Arism</span>
					<span className="text-primary-400">Lab</span>
				</h3>
				<p className="text-lg font-thin text-white/80">
					ArismLab redefines your interaction with blockchain. From gaming to
					finances, ownership is in your hands.
				</p>
				<p className="text-lg font-thin text-white/50">
					© 2024 ArismLab. All rights reserved.
				</p>
			</div>
			<div className="mr-auto flex h-full w-2/3">
				<div className="grid h-full w-full grid-cols-2 gap-5 divide-x divide-white/20 rounded-t-xl bg-white/5 py-10 text-lg backdrop-blur-xl">
					<div className="flex flex-col gap-8 px-16 py-10">
						{siteMetadata.internalLinks.map((link) => (
							<a key={link.path} href={link.path} className="text-zinc-100">
								{link.title}
							</a>
						))}
					</div>{' '}
					<div className="flex flex-col gap-8 px-16 py-10">
						{siteMetadata.socialLinks.map((link) => {
							const Component = Icons[`Fa${link.title}`]
							return (
								<a
									key={link.url}
									href={link.url}
									className="flex items-center gap-5 text-zinc-100"
								>
									<Component className="text-2xl text-white" />
									{link.title}
								</a>
							)
						})}
						{siteMetadata.footerLinks.map((link) => (
							<a
								key={link.url}
								href={link.url}
								className="flex items-center gap-5 text-zinc-100"
							>
								{link.title}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
