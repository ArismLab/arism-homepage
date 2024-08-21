import MembersMain from '@components/MembersMain'
import { HomeSEO } from '@components/SEO'
import LandingMain from '@components/LandingMain'
import AboutUsMain from '@components/AboutUsMain'
import GamesMain from '@components/GamesMain'
import WalletMain from '@components/WalletMain'

const Home = (): JSX.Element => {
	return (
		<>
			<HomeSEO />
			<LandingMain />
			<GamesMain />
			<WalletMain />
			<AboutUsMain />
			<MembersMain />
		</>
	)
}

export default Home
