import React, { useContext } from 'react'
import './Navbar.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';
import { carData } from '../App';


export default function NavBar() {
    const navigate = useNavigate()
    const {correctUsername} = useContext(carData);


    const handleButtonClick = (buttonName) => {
        switch (buttonName) {
            case "Home":
                navigate('/home')
                break;
            case "Sell":
                navigate('/sellCar')
                break;
            case "Services":
                // Handle Services button click logic
                console.log("Services button clicked");
                break;
            case "Contact":
                // Handle Contact button click logic
                console.log("Contact button clicked");
                break;
            default:
                // Default case, handle unexpected button click
                console.log(`Unexpected button ${buttonName} clicked`);
        }
    };

    return (
        <nav>
            <p style={{color:'white'}}>hello {correctUsername}!</p>
            <ul>
                <li>
                    <button className="navbar-button" onClick={() => handleButtonClick("Home")}>Home</button>
                </li>
                <li>
                    <button className="navbar-button" onClick={() => handleButtonClick("Sell")}>Sell</button>
                </li>
                <li>
                    <button className="navbar-button" onClick={() => handleButtonClick("Services")}>Services</button>
                </li>
                <li>
                    <button className="navbar-button" onClick={() => handleButtonClick("Contact")}>Contact</button>
                </li>
            </ul>
        </nav>
    );
};

