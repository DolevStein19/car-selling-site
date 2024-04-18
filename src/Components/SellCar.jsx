import React, { useContext, useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import { carData } from '../App';


export default function SellCar() {
    const {setCars,Car,cars} = useContext(carData)
    const navigate = useNavigate()
    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [model,setModel] = useState('');
    const [price,setPrice] = useState('');
    const [kilometers,setKilometers] = useState('');

    const handleCreate = () =>{
        let tempCar = new Car;
        tempCar.id = id;
        tempCar.name = name;
        tempCar.model = model;
        tempCar.price = price;
        tempCar.kilometers = kilometers;
        if(!tempCar.id ||!tempCar.name||!tempCar.model||!tempCar.price||!tempCar.kilometers){
            alert('please enter the details')
        }else{
            setCars([...cars,tempCar])
            navigate('/home')
        }
    }



  return (
    <div>
        <NavBar/>
        <h1>Ready to sell your car?</h1>
        <br />
        <br />
        <br />
        <h3>Please Enter The Details:</h3>


        <div className='inputs'>
        <input 
                type="text" 
                placeholder="Id..." 
                value={id} 
                onChange={(e) => setId(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Name..." 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Model..." 
                value={model} 
                onChange={(e) => setModel(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Price..." 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="How many kilometers..." 
                value={kilometers} 
                onChange={(e) => setKilometers(e.target.value)} 
            />
            </div>
            <button onClick={handleCreate}>Sell Your Car!</button>


        
    </div>
  )
}
