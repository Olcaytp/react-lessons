import './App.css';
import React from 'react';
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
//-------------------------------------------------------------

import SecondContainer from './components/secondContainer'; 

 function App() {

  const [header, setHeader] = React.useState('Jag lär mig React!');
  const [secondHeader, setSecondHeader] = React.useState('Jag lär mig React för andra behållare(container)!');
  const number = 2023;
  return (
    <div>
      <Container title = {header} number = {number} />
      <button style={{margin:'5px 950px'}} onClick={()=>{setHeader('Jag kan byta rubrik med setHeader!')}}>Change Header</button>
      <SecondContainer title = {secondHeader} number = {number} />
    </div>
  )
}

function Container(props) {
  return(
    <div style={{border: '2px solid black', padding: '10px', width:'400px', height:'400px', margin:'10px auto' }}>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </div>
  );
}



export default App;

