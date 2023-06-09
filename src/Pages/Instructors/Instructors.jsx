import React from 'react';
import AllClasses from '../AllClasses/AllClasses';
import UseAllClasses from '../../Hooks/useAllClasses';
import useAllInstructors from '../../Hooks/useAllInstructors';
import AllInstructorsCard from './AllInstructorsCard';

const Instructors = () => {
    const [allInstructors] = useAllInstructors()
    return (
        <div className='py-20'>
            <h1 className='text-5xl font-bold text-center uppercase text-purple-500 mb-10'>All Instructor</h1>
            <div className='grid md:grid-cols-2 p-5 gap-5 justify-evenly'>
                {
                    allInstructors.map(IData =>
                        <AllInstructorsCard
                            key={IData._id}
                            IData={IData}
                        ></AllInstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;