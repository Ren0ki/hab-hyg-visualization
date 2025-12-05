//imports
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import data from '../local-data/data.json';
import { raycastScript } from '../scripts/Raycasting';
import { resizeScript } from '../scripts/Resizing';
import { animationScript } from '../scripts/Animation';
import { sceneScript } from '../scripts/Scene';
import { parsingScript } from '../scripts/Parsing';
import { meshScript } from '../scripts/MakeMeshes';

export default function Stars({onClickStar})
{
    //define mountToDom, use to insert element into DOM
    const mountRef = useRef();
    const rows = [];
    <h1> THE HAB_HYG VISUALIZATION</h1>

    useEffect(() => {

    //initialize scene
    const mount = mountRef.current; //construct mounting var
    const{scene, camera, renderer, controls} = sceneScript(mount);
    const rows = parsingScript(data);

    //initialize stars
    const instanced = meshScript(rows, 20);
    scene.add(instanced); //add instance sphere
       
    //raycasting
    instanced.raycast =  THREE.InstancedMesh.prototype.raycast;
    instanced.instanceMatrix.needsUpdate = true;
    const handleClick = (event) => 
        { 
            const hits = raycastScript(event, mount, camera, instanced,
            (hit) => {const id = hit.instanceId; onClickStar & onClickStar(data[id]);})
            if(hits.length === 0){console.log("No hit");}
        };

    //resizing
    mount.addEventListener("click", handleClick);
    const cleanupResize = resizeScript(camera, renderer, mount);
    
    //animation
    const cleanupAnimation = animationScript(() => 
        {
            controls.update();
            renderer.render(scene, camera);
        });

    //------HANDLE CLEANUP------//
        return () => {
            cleanupResize();
            cleanupAnimation();
            mount.removeEventListener("click", handleClick);
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, [onClickStar]);

//------RETURN OUTPUT------//
return(
<div
  ref={mountRef}
  style={{width: "100vw", height: "100vh", overflow: "hidden", pointerEvents: "auto", position: "relative",background: "transparent"}}
/>
);
}