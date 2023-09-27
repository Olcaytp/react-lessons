import React from 'react';

export default function SecondContainer(props) {
    return(
      <div style={{border: '2px solid black', padding: '10px', width:'400px', height:'400px', margin:'0px auto' }}>
        <p>{props.title}</p>
        <p>{props.number}</p>
      </div>
    );
  }