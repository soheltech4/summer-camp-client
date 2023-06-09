import React from 'react';
import useInstructor from '../../../Components/Classes/UseInstructor';
import InstructorCard from './InstructorCard';
import { Link } from 'react-router-dom';

const PopularInstructor = () => {
    const [instructors] = useInstructor()
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-10 mb-10 uppercase text-purple-500'>Popular Instructor</h1>
            <div className='grid md:grid-cols-2 p-5 gap-5 justify-evenly mb-20'>
                {
                    instructors.map(IData =>
                        <InstructorCard
                            key={IData._id}
                            IData={IData}
                        ></InstructorCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-primary uppercase mb-20"><Link to="/all-instructors">See All Instructors</Link></button>
            </div>
        </div>
    );
};

export default PopularInstructor;