import React from 'react';
import Banner from './Banner/Banner';
import TopClasses from './TopClasses/TopClasses';
import PopularInstructor from './PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <TopClasses></TopClasses>
            <PopularInstructor></PopularInstructor>  
        </div>
    );
};

export default Home;