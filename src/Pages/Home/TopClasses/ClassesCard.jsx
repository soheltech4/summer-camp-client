import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import {useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';

const ClassesCard = ({ CData }) => {
    const { availableSeats, courseName, image, instructorName, price, _id, totalSeats } = CData;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const isSeatsLimited = availableSeats === 0;

    const cardClass = `card w-96 hover:bg-blue-100 shadow-xl ${isSeatsLimited ? 'bg-red-500' : ''}`;
    const buttonDisabled = isSeatsLimited;

    const handleSelect = id => {
        console.log(id)
        if (!user) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able without Login",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location }})
                }
            })
        }
    }

    return (
        <div className={cardClass}>
            <figure>
                <img src={image} className="w-full h-48" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title uppercase">{courseName}</h2>
                <p className="text-xl font-semibold">Instructor: {instructorName}</p>
                <p className="text-xl">Total Seats: {totalSeats}</p>
                <p className="text-xl">Available Seats: {availableSeats}</p>
                <p className="text-xl">Price: ${price}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleSelect(_id)} className="btn btn-primary w-full" disabled={buttonDisabled}>Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;
