import React, { useEffect, useRef, useState } from 'react'
import { Html} from "@react-three/drei";
import * as THREE from "three";
import {ReactComponent as Mark} from '../Assets/mark.svg';
import { useLoader } from "@react-three/fiber";






const Dome = ({ name,color, position, texture, onClick,which,setWhich,modal,setModal }) => {
  console.log(modal);

  const handleClick=()=>{
    if(which===0 && name === "outside"){
      setWhich(1);

    }
    if(which ===1 && name ==="inside"){
      setWhich(0);
    }
    if(which==1 ){
      setWhich(2)

    }

    if((which==2) && name==="Top"  ){
      setWhich(0)

    }
  }
    return (
        <group>
          <mesh  >
            <sphereBufferGeometry args={[500, 60, 40]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
          </mesh>

          <mesh  position={position}>
            <sphereGeometry args={[1.25, 32, 32]} />
            <meshBasicMaterial color={color} />
            <Html center>

                <p  onClick={handleClick}  className="spot">
                  {name}
              </p>

            </Html>
          </mesh>

          <mesh   position={[20, 0, 20]}>
            <sphereGeometry args={[1.25, 32, 32]} />
            <meshBasicMaterial color={color} />
            <Html center>

                <p onClick={()=>setModal(true)}  className="spot">
                  {<Mark />}
                </p>
             
            </Html>
          </mesh>

        
        </group>
      );
}

export default Dome