import Container from 'components/Container'
import Header from 'components/header/Header'
import React from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import LearningJourney from './LearningJourney/LearningJourney'
import Footer from './Footer/Footer'

const Home = () => {
    return (
        <main>
            <Container>
                <Header />
                <Hero />
                <Features />
                <LearningJourney />
                <Footer />
            </Container>
        </main>)
}

export default Home