import React from 'react';
import UseClasses from '../../../Components/Classes/UseClasses';
import ClassesCard from './ClassesCard';

const TopClasses = () => {
    const [classes] = UseClasses()
    return (
        <div className='grid md:grid-cols-3 gap-5 justify-center'>
            {
                classes.map(CData => 
                <ClassesCard
                    key={CData._id} 
                    CData={CData}
                ></ClassesCard>)
            }
        </div>
    );
};

export default TopClasses;