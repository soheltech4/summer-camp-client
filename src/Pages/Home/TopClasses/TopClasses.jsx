import React from 'react';
import UseClasses from '../../../Components/Classes/UseClasses';
import ClassesCard from './ClassesCard';
import { Link } from 'react-router-dom';

const TopClasses = () => {
    const [classes] = UseClasses()
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-10 mb-10 uppercase text-purple-500'>Popular Classes</h1>
            <div className='grid md:grid-cols-3 gap-5 justify-evenly md:ml-16 items-center mb-20'>
                {
                    classes.map(CData =>
                        <ClassesCard
                            key={CData._id}
                            CData={CData}
                        ></ClassesCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-primary uppercase mb-20"><Link to="/all-classes">See All Classes</Link></button>
            </div>
        </div>
    );
};

export default TopClasses;