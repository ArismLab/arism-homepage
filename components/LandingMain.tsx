import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import Card from '@components/Card'
import Link from 'next/link'
import Partnership from './Partnership'
import Marquee from '@/components/magicui/marquee'

const LandingMain = () => {
	return (
		<div className="relative mx-auto grid h-screen w-screen place-items-center">
			<div className="grid h-2/3 w-2/3 grid-cols-3 place-items-center items-center">
				<div className="relative col-span-2 my-auto flex h-2/3 flex-col justify-center gap-10">
					<h1 className="font-decorative w-full text-left text-8xl font-medium uppercase text-white">
						Dominating the Digital <br /> Space with Blockchain
					</h1>
					<div className="grid w-full grid-cols-2">
						<p className="text-xl font-thin text-white">
							ArismLab redefines your interaction with blockchain. From gaming
							to finances, ownership is in your hands.
						</p>
						<img
							src="/static/landing-image.png"
							alt="landing"
							className="absolute inset-y-0 right-0 top-0 z-10 h-[110vh] -translate-y-[25%] translate-x-[20%] object-cover"
						/>
					</div>
					<div className="group relative h-20 w-1/3">
						<div className="absolute h-20 w-full bg-primary-400 p-10 blur-lg group-hover:blur-xl"></div>
						<a
							className="absolute flex h-20 w-full place-items-center items-center bg-primary-400 text-white"
							href="#"
						>
							<p className="mx-auto flex items-center gap-2">
								<span className="font-decorative text-3xl uppercase">
									Explore
								</span>
								<AiOutlineRight className="text-3xl" />
							</p>
						</a>
					</div>
				</div>
				<div className="my-auto mt-auto flex h-[220px] w-full flex-col justify-center gap-5">
					<div className="grid h-full w-full grid-cols-5 grid-rows-5">
						<div className="col-span-2 row-span-5 border-y border-l bg-white/20 backdrop-blur-md">
							<div className="flex h-full w-full flex-col place-items-center items-center justify-between p-2 font-medium">
								<span className="font-decorative text-4xl text-white">SEP</span>
								<span className="font-decorative text-9xl text-secondary-400">
									10
								</span>
								<span className="font-decorative text-4xl text-white/60">
									18:00:00
								</span>
							</div>
						</div>
						<div className="relative col-span-3 row-span-3 border-y border-r bg-white/20 backdrop-blur-md">
							<div className="absolute inset-y-0 -left-[1px] h-full w-[1px] backdrop-blur-md"></div>
							<div className="relative h-full w-full py-2 pr-2">
								<img
									src="/static/event-thumbnail.png"
									alt="event"
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
						<div className="col-span-3 row-span-2 grid h-full w-full place-items-end border-l">
							<div className="group relative flex h-[87%] w-[95%] place-items-end items-end">
								<div className="absolute h-full w-full bg-primary-400 p-10 blur-lg group-hover:blur-xl"></div>
								<a
									className="absolute flex  h-full w-full place-items-center items-center bg-primary-400 text-white"
									href="#"
								>
									<p className="mx-auto flex items-center gap-2">
										<span className="font-decorative text-3xl uppercase">
											Play
										</span>
										<AiOutlineRight className="text-3xl" />
									</p>
								</a>
							</div>
						</div>
					</div>
					<h2 className="font-decorative w-full text-left text-5xl font-medium uppercase text-white">
						{"It's Focus Bear"}
					</h2>
				</div>
			</div>

			<div className=" z-0 mb-auto flex w-2/3 items-center justify-center overflow-hidden text-nowrap text-xl text-white">
				<Marquee pauseOnHover className="[--duration:20s]" horizontal>
					<Partnership src="/static/partnership/1.png" name="Bera chain" />
					<Partnership src="/static/partnership/2.png" name="BGT Station" />
					<Partnership src="/static/partnership/3.png" name="HONEY" />
					<Partnership src="/static/partnership/4.png" name="BERPS" />
					<Partnership src="/static/partnership/5.png" name="BEX" />
					<Partnership src="/static/partnership/6.png" name="BEND" />
					<Partnership src="/static/partnership/7.png" name="Beratrails" />
				</Marquee>
			</div>
		</div>
	)
}

export default LandingMain
