import { cn } from '@lib/utils'
import { AiOutlineRight } from 'react-icons/ai'
import { Spotlight } from './ui/spotlight'
import { WavyBackground } from './ui/wavy-background'

const WalletMain = () => {
	return (
		<div
			className="relative mb-[10vh] flex w-full flex-col place-items-center items-center gap-10"
			id="wallet"
		>
			<WavyBackground
				className="relative flex w-full flex-col place-items-center items-center gap-10"
				backgroundFill="#0D1216"
				colors={[
					'rgb(91 33 182)',
					'rgb(167 139 250)',
					'rgb(124 58 237)',
					'rgb(251 146 60)',
				]}
			>
				{/* <Spotlight className="-top-40 right-0" fill="white" /> */}
				<h2 className="font-display text-7xl font-extralight transition duration-200 ease-in-out group-hover:text-opacity-50">
					Arism Wallet
				</h2>
				<p className="w-full text-nowrap text-center font-decorative text-5xl">
					<span className="bg-gradient-to-tr from-primary-400 to-secondary-400 bg-clip-text text-transparent">
						The Hyper Wallet Protocol
					</span>
				</p>
				<p className="flex w-full flex-col gap-3 text-center text-xl font-thin text-white">
					<span>
						{
							'Arism Wallet is a distributed key and identifier management protocol powered by Zero Knowledge.'
						}
					</span>
					<span>
						{
							"This decentralized wallet application uses advanced cryptographic algorithms to ensure the security and integrity of user's private keys."
						}
					</span>
				</p>
				<div className="mt-5 grid h-full w-1/2 grid-cols-2 gap-20">
					<div className="group relative flex h-16 w-full place-items-end items-end">
						<div className="absolute h-16 w-full bg-zinc-100 blur-lg group-hover:blur-xl"></div>
						<a
							className="absolute flex  h-16 w-full place-items-center items-center bg-zinc-100 text-black"
							href="https://docs.arism.org"
							target="_blank"
							rel="noreferrer"
						>
							<p className="mx-auto flex items-center gap-2">
								<span className="font-decorative text-3xl uppercase">
									Arism Docs
								</span>
								<AiOutlineRight className="text-3xl" />
							</p>
						</a>
					</div>
					<div className="group relative flex h-16 w-full place-items-end items-end">
						<div className="absolute h-16 w-full bg-zinc-100 blur-lg group-hover:blur-xl"></div>
						<a
							className="absolute flex  h-16 w-full place-items-center items-center bg-zinc-100 text-black"
							href="https://app.arism.org"
							target="_blank"
							rel="noreferrer"
						>
							<p className="mx-auto flex items-center gap-2">
								<span className="font-decorative text-3xl uppercase">
									Launch app
								</span>
								<AiOutlineRight className="text-3xl" />
							</p>
						</a>
					</div>
				</div>
			</WavyBackground>
		</div>
	)
}

export default WalletMain
