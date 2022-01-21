import React from 'react';

export default function Description ({text, src}){
  return(
    <div style={{display: 'flex', padding: 20, backgroundColor: '#ffffe0'}}>
        <p style={{marginRight: 30}}>{text}</p>
        <img src={"https://" + src} width="700px" height="400px"></img>
    </div>
);  
} 