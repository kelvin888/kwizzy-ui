import Container from 'components/Container'
import Header from 'components/header/Header'
import React, { type FC } from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import LearningJourney from './LearningJourney/LearningJourney'
import Footer from './Footer/Footer'

const Home: FC = () => {
    return (
        <main data-testid="home-container">
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