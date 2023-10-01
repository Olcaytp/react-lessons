import './App.css';
// import React from 'react';
// import Navbar, { AltNavbar } from './components/navbar';
// import Body from './components/body'  

// function App() {
//   return (
//     <div className="App">
//      <Navbar />
//       <AltNavbar />
//       <Body />
//     </div>
//   );
// }

//-------------------------------------------------------------

// import React from 'react';
// function App() {

//   const [value, setValue] = React.useState(0);

//   // function decrease(){
//   //   setValue(value-1);
//   // }

//   const decrease = () => {
//     setValue(value-1);
//   }

//   return (
//     <div className="App">
//       <p><button onClick={()=>{setValue(value+1)}}>Increase</button></p>
//       <p>{value}</p>
//       <p><button onClick={decrease}>Decrease</button></p>
//     </div>
//   )
// }
//-------------------------------------------------------------lesson 11

// import React from 'react';
// import SecondContainer from './components/secondContainer'; 

//  function App() {

//   const [header, setHeader] = React.useState('Jag lär mig React!');
//   const [secondHeader, setSecondHeader] = React.useState('Jag lär mig React för andra behållare(container)!');
//   const number = 2023;
//   return (
//     <div>
//       <Container title = {header} number = {number} />
//       <button style={{margin:'5px 950px'}} onClick={()=>{setHeader('Jag kan byta rubrik med setHeader!')}}>Change Header</button>
//       <SecondContainer title = {secondHeader} number = {number} />
//     </div>
//   )
// }

// function Container(props) {
//   return(
//     <div style={{border: '2px solid black', padding: '10px', width:'400px', height:'400px', margin:'10px auto' }}>
//       <p>{props.title}</p>
//       <p>{props.number}</p>
//     </div>
//   );
// }

//-------------------------------------------------------------lesson 12

// import React from 'react'
// import Content from './components/content'

// const theme = {
//   light: {
//     backgroundColor: 'white',
//     color: 'black'
//   },
//   dark: {
//     backgroundColor: 'black',
//     color: 'white'
//   }
// }

// export const DataProvider = React.createContext();

// function App() {

//   const [value, setValue] = React.useState(theme.dark);
//   // const value = "React Header from Context API"

//   function change(){
//     if(theme.dark === value){
//       setValue(theme.light)
//       console.log(value)
//   } else {
//     setValue(theme.dark)
//     console.log(value)
//   }
//   }

//   return (
//     <div className='App'>
//       <button onClick={change}>
//         {theme.dark === value ? 'light' : 'dark'}
//       </button>
//       <DataProvider.Provider value={value}>
//         <Content />
//       </DataProvider.Provider>
//     </div>
//   )
// }

//-------------------------------------------------------------lesson 13

// import React from 'react'

// function App() {
//   const [timer, setTimer] = React.useState(5);

//     React.useEffect(() => {
//       if(timer !== 0){
//         const interval = setInterval(() => {
//           setTimer(timer - 1);
//         }, 1000);

//       return () => clearInterval(interval);
//       }
//     }, [timer]);

//     return (
//       <div className='App'>
//         <div style={{height:'250px', width:'250px', backgroundColor:'blue', borderRadius:'30%',
//       color:'white', fontSize:'60px', margin:'10px auto', lineHeight:'250px'}}>{timer}</div>
//       </div>
//     )
// }

//-------------------------------------------------------------lesson 14

// import React, {useRef} from 'react'

// function App() {

//   const [color, setColor] = React.useState('red');
//   const colorChange = useRef(null);

//   function change(){
//     document.body.style.backgroundColor = colorChange.current.value;
//     console.log(colorChange.current.className);
//     setColor(() => colorChange.current.value);
//   }

//   return (
//     <div className='App'>
//       <p>Write some text to input</p>    
//       <input type='text' ref={colorChange} onChange={change} className='color-change'/>
//       <p>{color}</p>
//     </div>
//   )
// }

//-------------------------------------------------------------lesson 15

// import React, {useEffect, useState} from 'react'
// import axios from 'axios';

// function App() {

//   const [data, setData] = useState('');
//   const [id, setId] = useState(1);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res => setData(res.data[id].title))
//         .catch(err => console.log(err))
//         // .then((response) => {
//         //   console.log(response.data[0].title);
//         // })
//       }, [data, id]);

//   return (
//   <div className='App'>
//     <p>{data}</p>
//     <input type='text' value={id} onChange={e => setId(e.target.value)} />
//     </div>
//     )
// }

//-------------------------------------------------------------lesson 16

// import React, {useEffect, useState} from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState();
//   const [date, setDate] = useState();

//   useEffect(() => {
//     axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
//     .then(res => setData(res.data[date]))
//     .catch(err => console.log(err))
//   }, [data,date])

//   return (
//     <div className="App">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 mx-auto mt-4">
//             <h4 className="text-center text-white display-3">TURKEY COVID-19 SEARCH ENGINE</h4>
//             <input type="text" placeholder="GG/AA/YY" className="form-control" onChange={(e) => setDate(e.target.value)}/>
//             <table className="table table-striped text-white">
//               <thead>
//                 <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Number Of Tests</th>
//                 <th scope="col">Number Of Patients</th>
//                 <th scope="col">Number Of Deaths</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className={data === undefined ? "bg-danger" : "bg-success"}>
//                 <th scope="row"> {data === undefined ? "waiting for data" : data.date} </th>
//                 <td className="text-white" > {data === undefined ? "waiting for data" : data.totalTests} </td>
//                 <td className="text-white" > {data === undefined ? "waiting for data" : data.patients} </td>
//                 <td className="text-white" > {data === undefined ? "waiting for data" : data.deaths} </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//-------------------------------------------------------------lesson 17
//npm use-position is used for taking browsers longitude and latitude
//while starting the app for the first time comment the temperature, status and feature lines
//because the data is not fetched yet and it will give error

// import React, {useState, useEffect} from 'react'
// import axios from 'axios';
// import { usePosition } from 'use-position';


// function App() {

//   const[weather, setWeather] = useState([]);
//   const { latitude, longitude } = usePosition();
//   // console.log(latitude, longitude);

//   const getWeatherData = async (lat, lon) => {
//     const key = process.env.REACT_APP_WEATHER_DATA;
//     // console.log(key);
//     const lang = navigator.language.split('-')[0];
//     // console.log(lang);

//     try{
//       // const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}`);
//       const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
//       console.log(data);
//       setWeather(data);
//     }
//     catch(error){
//       console.log(error);
//       alert('Something went wrong');
//     }
//   }


//   useEffect(() => {
//     latitude && longitude && getWeatherData(latitude, longitude);
//   },[latitude, longitude])

//   return (
//     <div className='App' style={{color:'yellowgreen', backgroundColor:'teal'}} >
//       <h2>weather</h2>
//       {weather && (
//         <>
//           <h3>Longitude: {latitude} </h3>
//           <h3>Latitude: {longitude} </h3>
//           <h3>Coordinate Region: {weather.name} </h3>
//           <h3>Temperature: {Math.ceil(weather.main.temp-273.15)} </h3>
//           <h3>Status: {weather.weather.map(data=>data.main)} </h3>
//           <h3>Feature: {weather.weather.map(data=>data.description)} </h3>
//         </>
//       )}
//     </div>
//   );
// }

//-------------------------------------------------------------lesson 18
//react Routing and we need to install react-router-dom

import React from 'react'
import './App.css';
import logo from './img/logo192.png'
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter as Route, Link, useParams, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} width="30" height="30" alt="logo" loading="lazy" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span> </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        <div className="col-md-8 mx-auto mt-4">
          <div className="alert alert-warning" role='alert'>
            <Routes>
              <Route path='/:id' element={<Child/>}></Route>
            </Routes>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

function Child(){
  let {id} = useParams();
  return(
    <div>
      <p>ID: {id}</p>
    </div>
  )
}

export default App;