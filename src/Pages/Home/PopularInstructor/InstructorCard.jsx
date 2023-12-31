import React from 'react';

const InstructorCard = ({ IData }) => {
    const {image, name, email, numClassesTaken, classesTaken, description} = IData
    return (
        <div className="hero min-h-min hover:bg-blue-100 rounded-lg shadow-xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="w-full h-full md:w-48 md:h-72 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="md:py-4 font-semibold"> E-mail : {email}</p>
                    <p className="md:py-4"> Description: {description}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;