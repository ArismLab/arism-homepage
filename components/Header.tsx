import React from 'react'
import Image from '@components/Image'
import Link from '@components/Link'
import siteMetadata from '@data/siteMetadata.json'
import * as Icons from 'react-icons/fa'

const Header = () => {
	return (
		<div
			className="flex w-full items-center justify-between px-20 py-10"
			id="home"
		>
			<Link className="group " href="/">
				<div className="flex place-items-center items-center gap-5">
					<Image
						alt="Arism logo"
						src="/static/logo.png"
						width={60}
						height={60}
						className="transition duration-200 ease-in-out group-hover:opacity-50"
					/>
					<h1 className="font-display text-4xl font-extralight transition duration-200 ease-in-out group-hover:text-opacity-50">
						<span className="text-white">Arism</span>
						<span className="text-primary-400">Lab</span>
					</h1>
				</div>
			</Link>
			<div className="flex gap-10 text-white">
				{siteMetadata.internalLinks.slice(1).map((link) => (
					<Link key={link.path} href={link.path}>
						{link.title}
					</Link>
				))}
			</div>
			<div className="flex gap-10">
				{siteMetadata.socialLinks.map((link) => {
					const Component = Icons[`Fa${link.title}`]
					return (
						<a key={link.url} href={link.url}>
							<Component className="text-2xl text-white" />
						</a>
					)
				})}
			</div>
		</div>
	)
}

export default Header
