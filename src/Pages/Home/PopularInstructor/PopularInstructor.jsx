import React from 'react';
import useInstructor from '../../../Components/Classes/UseInstructor';
import InstructorCard from './InstructorCard';

const PopularInstructor = () => {
    const [instructors] = useInstructor()
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-10 mb-10 uppercase'>Popular Instructor</h1>
            <div className='grid md:grid-cols-3 gap-5 justify-evenly md:ml-16 items-center mb-20'>
                {
                    instructors.map(IData =>
                        <InstructorCard
                            key={IData._id}
                            IData={IData}
                        ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;