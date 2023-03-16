import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls,Stage} from "@react-three/drei";
import Mac from "./Mac.jsx";
import styled from "styled-components";

const Dsec = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width : 768px) {
    display: none;
  }
`

const WebDesign = ()=>{
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Mac/>
                </Stage>
                <OrbitControls enableZoom = {false} />
            </Canvas>
            <Dsec>
                hey
            </Dsec>
        </>
    )
}

export default WebDesign
