import * as THREE from "three";
import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {Preload,Environment,Html,useProgress, OrbitControls } from "@react-three/drei";
import "antd/dist/antd.css";
import Modal from "./Components/Modal";
import Dome from "./Components/Dome";
import Sound from './Components/Sound'



const store = [
  {
    name: "outside",
    color: "lightpink",
    position: [20, -5, -3],
    url: "/indexx.jpg",
    link: 0,
  },
  {
    name: "snow",
    color: "lightblue",
    position: [10, 0, -3],
    url: "/index.jpg",
    link: 1,
  },
  {
    name: "Top",
    color: "hotpink",
    position: [0, 0, 10],
    url: "/snow.jpg",
    link: 2,
  },
 
];



function Portals({modal,setModal}) {
  const [which, setWhich] = useState(0);
  const { link, ...props } = store[which];
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) //maps is an array of textures


  return (
    <Dome 
      setModal={setModal}
      modal={modal}
      // onClick={() => setWhich(link)}
      which={which}
      setWhich={setWhich}
      {...props}
      texture={maps[which]}
    />
  );
}

function App() {
  const [modal, setModal] = useState(false);
  const [rotate, setRotate] = useState(true);
  const handleRotate = () => {
    setRotate(!rotate);
  }
  
  


  return (
    <div onDoubleClick={handleRotate} className="container">
    {modal &&  <Modal setModal={setModal} modal={modal} /> }

    <Sound/>
     
      <Canvas  frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
       
        <Suspense fallback={null}>
          <Preload all />
          <Portals modal={modal} setModal={setModal}  />
          {/* <axesHelper  /> */}
        </Suspense>

        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          autoRotate={rotate}
          rotateSpeed={-0.3}
        />
      </Canvas>
    </div>
  );
}

export default App;
