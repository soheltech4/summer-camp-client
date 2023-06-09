import React from 'react';

const AllInstructorsCard = ({IData}) => {
    const {image, name, email, numClassesTaken, classesTaken, description} = IData
    return (
        <div className="hero min-h-min hover:bg-blue-100 rounded-lg shadow-xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="w-full h-full md:w-48 md:h-72 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="font-semibold"> <span>E-mail :</span> {email}</p>
                    <p className="font-semibold"> <span>Classes Taken : </span> {numClassesTaken}</p>
                    <p className="font-semibold"> <span>Classes : </span> {classesTaken.map(c=> <h1 className='flex text-red-700'>{c},</h1>)} </p>
                    <p className=""> Description: {description}</p>
                </div>
            </div>
        </div>
    );
};

export default AllInstructorsCard;