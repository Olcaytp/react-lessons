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

import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res => setData(res.data[date]))
    .catch(err => console.log(err))
  }, [data,date])

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h4 className="text-center text-white display-3">TURKEY COVID-19 SEARCH ENGINE</h4>
            <input type="text" placeholder="GG/AA/YY" className="form-control" onChange={(e) => setDate(e.target.value)}/>
            <table className="table table-striped text-white">
              <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Number Of Tests</th>
                <th scope="col">Number Of Patients</th>
                <th scope="col">Number Of Deaths</th>
                </tr>
              </thead>
              <tbody>
                <tr className={data === undefined ? "bg-danger" : "bg-success"}>
                <th scope="row"> {data === undefined ? "waiting for data" : data.date} </th>
                <td className="text-white" > {data === undefined ? "waiting for data" : data.totalTests} </td>
                <td className="text-white" > {data === undefined ? "waiting for data" : data.patients} </td>
                <td className="text-white" > {data === undefined ? "waiting for data" : data.deaths} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}




export default App;