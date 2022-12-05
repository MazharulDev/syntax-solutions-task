import React from 'react';
import HeroSection from '../heroSection/HeroSection';
import MainSection from '../mainSection/MainSection';

const Home = () => {
    return (
        <div>
            <div>
                {/* ======= Hero Section ======= */}
                <HeroSection />
                {/* End Hero */}
                <MainSection />
                {/* End #main */}
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            </div>
        </div>
    );
};

export default Home;