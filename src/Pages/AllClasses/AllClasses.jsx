import React from 'react';
import UseAllClasses from '../../Hooks/useAllClasses';
import AllClassCard from './AllClassCard';
const AllClasses = () => {
    const [allClasses] = UseAllClasses()
    return (
        <div className='py-20'>
            <h1 className='text-5xl font-bold text-center uppercase text-purple-500 mb-10'>All Classes</h1>
            <div className='grid md:grid-cols-3 gap-5 justify-evenly md:ml-16 items-center mb-20'>
                {
                    allClasses.map(cls => <AllClassCard key={cls._id} cls={cls}></AllClassCard>)
                }
            </div>
        </div>
    );
};

export default AllClasses;