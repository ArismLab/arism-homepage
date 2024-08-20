import { AiOutlineRight } from 'react-icons/ai'

const AboutUsMain = () => {
	return (
		<div className="mx-auto flex w-4/5 -translate-y-[25%] flex-col place-items-center gap-10">
			<h2 className="font-display text-7xl font-extralight transition duration-200 ease-in-out group-hover:text-opacity-50">
				<span className="text-white">Arism</span>
				<span className="text-primary-400">Lab</span>
			</h2>
			<div className="grid grid-cols-4 gap-20">
				<img
					src="/static/logo.png"
					alt="Arism logo"
					className="my-auto ml-auto w-full object-cover"
				/>
				<div className="col-span-3 my-auto flex flex-col  gap-10">
					<p className="flex flex-col gap-5 text-left text-xl font-light text-white ">
						<span>
							At ArismLab Studio, our mission is to transform the gaming
							landscape by merging innovation with empowerment.
						</span>
						<span>
							<span className="bg-gradient-to-tr from-primary-400 to-secondary-400 bg-clip-text text-transparent">
								We envision a future where every gamer is not just a player but
								a true creator and owner of their digital journey.{' '}
							</span>
							Through our pioneering work in game development, blockchain
							technology, and digital wallets, we empower players to own their
							in-game achievements, assets, and experiences.
						</span>
						<span>
							By blurring the lines between the virtual and real worlds, we are
							committed to creating an ecosystem where creativity thrives and
							the power of ownership is in your hands.
						</span>
					</p>
					<div className="group relative h-20 w-1/4">
						<div className="absolute h-20 w-full bg-primary-400 blur-lg group-hover:blur-xl"></div>
						<a
							className="absolute flex h-20 w-full place-items-center items-center bg-primary-400 text-white"
							href="#"
						>
							<p className="mx-auto flex items-center gap-2">
								<span className="font-decorative text-3xl uppercase">
									About us
								</span>
								<AiOutlineRight className="text-3xl" />
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUsMain
