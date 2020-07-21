import React from 'react';
import './App.css';
import desk from "./desk.jpg"

function App() {
  return (
    <div className="App">
     
    <div  >  
 
 <h1 style={{'textAlign' : "center"}}    >Your name here</h1>  

     
<div className="doudou">

       <img src="nature.jpg"  alt="nature" className="img123"/>


          <img src={desk} alt="desk" className="img123"/>  

</div>
          </div>  

<video style={{ width: 320 , height:240 , marginLeft:'35%' , padding: 50}} controls>  

   <source src="calopsitte-qui-chante.mp4" type="video/mp4" /> 

</video> 

    </div> 
    
  );
}

export default App;
