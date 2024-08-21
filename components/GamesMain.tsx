import { cn } from '@lib/utils'
import { AiOutlineRight } from 'react-icons/ai'

const games = [
	{
		title: "It's Focus Bear",
		description: 'Focus to earn',
		image: '/static/game/1.png',
		entry: 'Free',
		mode: 'Solo',
		tag: 'Focus',
	},
	{
		title: 'Bearly Cooked',
		description: 'Cooking under pressure - Together',
		image: '/static/game/2.png',
		entry: 'Free',
		mode: 'Multiplayer',
		tag: 'Cooking',
	},
	{
		title: 'Bera Tracks',
		description: 'AR adventure',
		image: '/static/game/3.png',
		entry: 'Free',
		mode: 'Solo',
		tag: 'AR, Adventure',
	},
	{
		title: 'Bera Craft: Thunder Wings',
		description: 'Sky Battle',
		image: '/static/game/4.png',
		entry: 'Free',
		mode: 'PVE',
		tag: 'Shooter',
	},
]

const Game = ({ title, description, image, entry, mode, tag, index }) => {
	return (
		<div
			className={cn(
				'h-full w-full shadow-2xl shadow-black',
				index % 2 == 1 ? 'bg-primary-300' : 'bg-primary-200',
				index == 1 && 'z-10',
				index == 2 && 'z-20',
				index == 3 && 'z-30',
				index == 4 && 'z-40'
			)}
		>
			<div className="relative h-full w-full">
				<div className="absolute inset-y-0 right-0 mt-auto max-h-[80%] max-w-[80%]">
					<img
						src={image}
						alt={title}
						className={cn(
							'h-full w-full object-contain',
							(index == 2 || index == 3) && 'mr-10'
						)}
					/>
				</div>
				<div className="flex flex-col gap-5 p-10">
					<p className="text-left font-decorative text-6xl font-semibold uppercase text-black">
						{title}
					</p>
					<p className="w-1/2 text-left text-xl font-light text-black">
						{description}
					</p>
				</div>
				<div className="absolute inset-x-0 bottom-0 grid h-[100px] w-full grid-cols-3 gap-5 bg-black/40 backdrop-blur-md">
					<div className="col-span-2 grid w-full grid-cols-3 place-items-center items-center">
						<p className="flex flex-col text-left">
							<span className="text-xl text-white/50">Entry</span>
							<span className="text-base text-white">{entry}</span>
						</p>
						<p className="flex flex-col text-left">
							<span className="text-xl text-white/50">Mode</span>
							<span className="text-base text-white">{mode}</span>
						</p>
						<p className="flex flex-col text-left">
							<span className="text-xl text-white/50">Tag</span>
							<span className="text-base text-white">{tag}</span>
						</p>
					</div>
					<div className="group relative my-auto h-14 w-full">
						<div className="absolute h-14 w-[90%] bg-zinc-100 blur-lg group-hover:blur-xl"></div>
						<a
							className="absolute flex h-14 w-[90%] place-items-center items-center bg-zinc-100 text-black"
							href="#"
						>
							<p className="mx-auto flex items-center gap-2">
								<span className="font-decorative text-xl uppercase">Join</span>
								<AiOutlineRight className="text-xl" />
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

const GamesMain = () => {
	return (
		<div
			className="flex h-[550px] w-full -translate-y-[25%]  flex-col gap-10"
			id="games"
		>
			<div className="mx-auto flex w-4/5 place-items-center items-center justify-between">
				<p className="text-center font-decorative text-5xl uppercase">
					Our Games
				</p>
				<p className="border-b-2 border-primary-400 pl-5 text-center font-decorative text-3xl">
					View All
				</p>
			</div>
			<div className="relative mx-auto grid h-full w-full grid-cols-4 place-items-center ">
				{games.map((game, index) => (
					<Game key={game.title} index={index + 1} {...game} />
				))}
			</div>
		</div>
	)
}

export default GamesMain
