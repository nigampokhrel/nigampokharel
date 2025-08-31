import React from "react";
import "./App.css";
import CircularText from "./CircularText";  // ✅ import your component
import TextPressure from './TextPressure.js';
import Particles from './Particles.js';
import CurvedLoop from './CurvedLoop';
import { tr } from "framer-motion/client";

function App() {
  return (
    <div className="App">
  
   <div style={{position: 'absolute', height: '100%',marginLeft: '250px', zIndex: -1}}>
        <TextPressure
      text="NIGAM-POKHAREL"
      flex={true}
      alpha={false}
      stroke={true}
      width={true}
      weight={true}
      italic={true}
      textColor="#000000ff"
      strokeColor="#ffffffff"
      minFontSize={36}
    />
  </div>

     <CircularText
        text=" nigam.com.np nigam.com.np "
        onHover="speedUp"
        spinDuration={10}
        className="custom-class"
      />
      
      <CurvedLoop 
  marqueeText="COMMING SOON "
  speed={1}
  curveAmount={300}
  interactive={false}
/>
     
     
      
      

      <div style={{ position: 'absolute', top: 0, left: 0,right:0,bottom:0, zIndex: 0 }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={500}
    particleSpread={20}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={true}
    disableRotation={false}
  />
    </div>
 </div>
  );
}

export default App;
