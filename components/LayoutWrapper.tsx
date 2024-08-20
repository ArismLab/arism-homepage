import { useRouter } from 'next/router'
import TransitionWrapper from '@components/TransitionWrapper'
import Header from '@components/Header'
import Footer from '@components/Footer'

const LayoutWrapper = ({ children }: Wrapper): JSX.Element => {
	const router = useRouter()

	return (
		<>
			<TransitionWrapper router={router}>
				<div className="relative">
					<div className="bg-dark-background absolute inset-0 z-0 h-screen w-screen object-cover">
						<div className="relative h-full">
							<img
								src="/static/background.png"
								alt="background"
								className="h-[100%] w-full object-cover"
							/>
							<div className="to-dark-background absolute bottom-0 h-[40%] w-full bg-gradient-to-b from-transparent"></div>
						</div>
					</div>
					<div className="absolute z-50 flex flex-col">
						<Header />
						<main className="w-screen">
							<div className="flex flex-col text-white">{children}</div>
						</main>
						<Footer />
					</div>
				</div>
			</TransitionWrapper>
		</>
	)
}

export default LayoutWrapper
