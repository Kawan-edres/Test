import * as THREE from "three";
import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {Preload,Environment,Html,useProgress, OrbitControls } from "@react-three/drei";
import Modal from "./Components/Modal";
import Dome from "./Components/Dome";
import Sound from './Components/Sound'
import StartUpModal from "./Components/StartUpModal";


const Directionstore = [
  {
    name: "outside",
    color: "lightpink",
    position: [20, -5, -3],
    url: "/room.jpeg",
    link: 0,
  },
  {
    name: "snow",
    color: "lightblue",
    position: [10, 0, -3],
    url: "/bed.jpeg",
    link: 1,
  },
  {
    name: "Top",
    color: "hotpink",
    position: [0, 0, 10],
    url: "/nature.jpeg",
    link: 2,
  },
 
];

const infoStore = [
  {
    pos: [20, 0, 20],
    sort: 0,
    col: "yellow",
  },
  {
    pos: [10, 0, -3],
    sort: 2,
    col: "red",
  },
  {
    pos: [20, 0, -3],
    sort: 3,
    col: "green",
  },
]



function Portals({modal,setModal}) {
  const [which, setWhich] = useState(0);
  const { link, ...props } = Directionstore[which];
  const { sort,pos,col } = infoStore[which];
  const maps = useLoader(THREE.TextureLoader, Directionstore.map((entry) => entry.url)) //maps is an array of textures


  return (
    <Dome 
      setModal={setModal}
      modal={modal}
      // onClick={() => setWhich(link)}
      which={which}
      setWhich={setWhich}
      {...props}
      texture={maps[which]}
      sort={sort}
      pos={pos}
      // col={col}
    />
  );
}

function App() {
  const [modal, setModal] = useState(false);
  const [rotate, setRotate] = useState(true);
  const [startUp, setStartUp] = useState(false);
  const handleRotate = () => {
    setRotate(!rotate);
  }
  
  


  return (
    <div onDoubleClick={handleRotate} className="container">
    {/* { !startUp &&<StartUpModal startUp={startUp} setStartUp={setStartUp} />} */}
    {modal &&  <Modal setModal={setModal} modal={modal} /> }

   <Sound/>
     
      <Canvas  frameloop="demand" camera={{ fov: 90,position: [0, 0, 0.1] }}>
       
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
