import React from 'react'

export default function CarModal({ car, onClose }) {

    return (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={onClose}>X</span>
            <h2>{car.name}</h2>
            <p><strong>Model:</strong> {car.model}</p>
            <p><strong>Price:</strong> ${car.price}</p>
            <p><strong>Kilometers:</strong> {car.kilometers} km</p>
            <p>{car.description}</p>
          </div>
        </div>
      );
}
