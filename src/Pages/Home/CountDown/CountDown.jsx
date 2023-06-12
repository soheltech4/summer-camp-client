import React from 'react';
import useAllInstructors from '../../../Hooks/useAllInstructors';
import UseAllClasses from '../../../Hooks/useAllClasses';

const CountDown = () => {
    const [allInstructors] = useAllInstructors()
    const [allClasses] = UseAllClasses()
    return (
        <div className='mb-20 p-2'>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-32 card shadow-md border-2 border-purple-300 hover:bg-blue-100 rounded-lg place-items-center">
                    <h1 className='uppercase text-4xl mt-5 font-semibold'>Total Instructor</h1>
                    <h1 className='mb-5 text-3xl font-semibold'>{allInstructors.length}</h1>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-32 card shadow-md border-2 border-purple-300 hover:bg-blue-100 rounded-lg place-items-center">
                    <h1 className='uppercase text-4xl mt-5 font-semibold'>Total Users</h1>
                    <h1 className='mb-5 text-3xl font-semibold'>{allClasses.length}</h1>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-32 card shadow-md border-2 border-purple-300 hover:bg-blue-100 rounded-lg place-items-center">
                    <h1 className='uppercase text-4xl mt-5 font-semibold'>Total Class</h1>
                    <h1 className='mb-5 text-3xl font-semibold'>{allClasses.length}</h1>
                </div>
            </div>
        </div>
    );
};

export default CountDown;