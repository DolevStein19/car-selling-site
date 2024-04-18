import { createContext,useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import toyotaImage from './imgs/toyota.jpg';
import hondaImage from './imgs/honda.jpg';
import fordImage from './imgs/ford.jpg';
import bmwImage from './imgs/bmw.jpg';
import SellCar from './Components/SellCar';

export const carData = createContext();




function App() {
  const [cars, setCars] = useState([
    { id: 1, name: 'Toyota Camry', model: '2021', price: '25,000', kilometers: '10,000 ', imageUrl: toyotaImage },
    { id: 2, name: 'Honda Accord', model: '2020', price: '22,500', kilometers: '15,000 ', imageUrl: hondaImage },
    { id: 3, name: 'Ford Mustang', model: '2019', price: '30,000', kilometers: '8,000 ', imageUrl: fordImage },
    { id: 4, name: 'BMW X5', model: '2018', price: '40,000', kilometers: '20,000 ', imageUrl: bmwImage },
  ]);
  
  const correctUsername = 'dolev'; // Replace with actual correct username
  const correctPassword = '123'; // Replace with actual correct password

  




  return (



    <div className="App">
      <BrowserRouter>
        <carData.Provider value={{cars,setCars,correctUsername,correctPassword,Car}}>

          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/sellCar' element={<SellCar/>}></Route>

          </Routes>
        </carData.Provider>
      </BrowserRouter>











    </div>
  );
}

export default App;


class Car{
  id = 0;
  name = '';
  model = '';
  price = 0;
  kilometers = 0;
}