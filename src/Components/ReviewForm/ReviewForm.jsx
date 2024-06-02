import React from 'react'
import './ReviewForm.css' 

function ReviewForm() {

    const doctors = [
        { id: 1, name: "Dr. John Doe", speciality: "Cardiology" },
        { id: 2, name: "Dr. Jane Smith", speciality: "Dermatology" },

    ];

  return (
    <div className="reviews-container">
        <h1>Reviews</h1> 
        <div className="reviews">
            <div className="reviews-header">
                <p>Serial Number</p>
                <p>Doctor Name</p>
                <p>Doctor Speciality</p>
                <p>Provide Review</p>
                <p>Review Given</p>
            </div>
            <div className="reviews-body">
                {doctors.map((doctor) => (
                <div key={doctor.id} className="doctor-review">
                    <p>{doctor.id}</p>
                    <p>{doctor.name}</p>
                    <p>{doctor.speciality}</p>
                    <p className='review-btn'>Give Review</p>
                    <p></p>
                </div>
                ))}
            </div>
        </div> 
    </div>
  )
}

export default ReviewForm