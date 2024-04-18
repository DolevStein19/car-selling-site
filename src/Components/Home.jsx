import React, { useContext, useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import { carData } from '../App';
import './home.css';
import CarModal from './CarModal';

export default function Home() {
    const { cars } = useContext(carData);
    const [selectedCar, setSelectedCar] = useState(null);

    const showCars = () => {
        return cars.map(car => (
            <div key={car.id} className="car" onClick={() => setSelectedCar(car)}>
                <img src={car.imageUrl} alt={car.name} />
                <h3>{car.name}</h3>
                <p><strong>Model:</strong> {car.model}</p>
                <p><strong>Price: </strong>${car.price}</p>
                <p><strong>Kilometers:</strong> {car.kilometers} km</p>
            </div>
        ));
    }

    const closeModal = () => {
        setSelectedCar(null);
    };

    // Close modal when clicking outside of it
    useEffect(() => {
        const handleClickOutsideModal = (event) => {
            if (event.target.classList.contains('modal-overlay')) {
                closeModal();
            }
        };

        if (selectedCar) {
            document.body.classList.add('modal-open'); // Disable scrolling on the body
            window.addEventListener('click', handleClickOutsideModal);
        } else {
            document.body.classList.remove('modal-open'); // Enable scrolling on the body
            window.removeEventListener('click', handleClickOutsideModal);
        }

        return () => {
            window.removeEventListener('click', handleClickOutsideModal);
        };
    }, [selectedCar]);

    return (
        <div>
            <Navbar />
            <h1>Home</h1>

            <section className="hero">
                <h2>Welcome to our Car Selling Website</h2>
                <p>Find the perfect car for you!</p>
            </section>

            <section className="featured-cars">
                <h2>Featured Cars</h2>
                <div className="car-grid">
                    {showCars()}
                </div>
            </section>

            <Footer />

            {selectedCar && <CarModal car={selectedCar} onClose={closeModal} />}
        </div>
    )
}
