import React from 'react';
import Banner from './Banner/Banner';
import TopClasses from './TopClasses/TopClasses';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import CountDown from './CountDown/CountDown';

const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <TopClasses></TopClasses>
            <PopularInstructor></PopularInstructor>  
            <CountDown></CountDown>
        </div>
    );
};

export default Home;