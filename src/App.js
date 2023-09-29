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

import React from 'react'

function App() {
  return (
    <div>
      
    </div>
  )
}


export default App;