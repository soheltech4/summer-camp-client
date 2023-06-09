import React from 'react';

const AllClassCard = ({ cls }) => {
    const { availableSeats, courseName, image, instructorName, price, _id, totalSeats } = cls
    return (
        <div className="card w-96 hover:bg-blue-100 shadow-xl">
            <figure><img src={image} className='w-full h-48' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title uppercase">{courseName}</h2>
                <p className='text-xl font-semibold'>Instructor : {instructorName}</p>
                <p className='text-xl'>Total Seats: {totalSeats}</p>
                <p className='text-xl'>Available Seats: {availableSeats}</p>
                <p className='text-xl'>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary w-full">Select</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassCard;