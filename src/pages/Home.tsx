import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Banner } from '../components/Banner'
import { WhatsPopular } from '../components/WhatsPopular'
import Trending from '../components/Trending'
const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <div><Banner /></div>
                <div>
                    <WhatsPopular />
                </div>
                <div>
                    <Trending />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home