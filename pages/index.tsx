import FoundersMain from '@components/FoundersMain'
import { HomeSEO } from '@components/SEO'
import LandingMain from '@components/LandingMain'
import AboutUsMain from '@components/AboutUsMain'

const Home = (): JSX.Element => {
	return (
		<>
			<HomeSEO />
			<LandingMain />
			<AboutUsMain />
			<FoundersMain />
		</>
	)
}

export default Home
