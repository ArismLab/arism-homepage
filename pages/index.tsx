import FoundersMain from '@components/FoundersMain'
import HighlightsMain from '@components/HighlightsMain'
import { HomeSEO } from '@components/SEO'
import WalletMain from '@components/WalletMain'

const Home = (): JSX.Element => {
  return (
    <>
      <HomeSEO />
      <div>
        <WalletMain />

        <HighlightsMain />

        <FoundersMain />
      </div>
    </>
  )
}

export default Home
