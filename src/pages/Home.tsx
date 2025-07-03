import { Banner } from '../components/Banner'
import { WhatsPopular } from '../components/WhatsPopular'
import Trending from '../components/Trending'
const Home = () => {
    return (
        <>
            <main>
                <div><Banner /></div>
                <div>
                    <WhatsPopular />
                </div>
                <div>
                    <Trending />
                </div>
            </main>
        </>
    )
}

export default Home