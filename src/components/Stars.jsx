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

    useEffect(() => {

    //initialize scene
    const temp = new THREE.Object3D(); //placeholder for selected star
    let selectedId = null; //track currently selected star
    const mount = mountRef.current; //construct mounting var
    const{scene, camera, renderer, controls} = sceneScript(mount); //call scene script

    //initialize transition animation
    let introProgress = 0; //starting point
    const introDuration = 120; //length of intro
    const startZ = 300; //start position
    camera.position.z = startZ; //starting camera position

    //parse data
    const rows = parsingScript(data); //parse data

    //initialize stars
    const instanced = meshScript(rows, 20); //call mesh script
    scene.add(instanced); //add instance sphere
       
    //raycasting
    instanced.raycast =  THREE.InstancedMesh.prototype.raycast;
    instanced.instanceMatrix.needsUpdate = true;

    function highlightStar(id){
        if(selectedId !== null){
            instanced.getMatrixAt(selectedId, temp.matrix);
            temp.matrix.decompose(temp.position, temp.quaternion, temp.scale);
            temp.scale.set(1, 1, 1);
            temp.updateMatrix();
            instanced.setMatrixAt(selectedId, temp.matrix);
        }

        instanced.getMatrixAt(id, temp.matrix);
        temp.matrix.decompose(temp.position, temp.quaternion, temp.scale);
        temp.scale.set(3, 3, 3);
        temp.updateMatrix();
        instanced.setMatrixAt(id, temp.matrix);

        instanced.instanceMatrix.needsUpdate = true;
        selectedId = id;


    }

    const handleClick = (event) => 
        { 
            const hits = raycastScript(event, mount, camera, instanced,
            (hit) => {
                const id = hit.instanceId; 
                highlightStar(id);
                onClickStar & onClickStar(data[id]);
            });

            if(hits.length === 0){console.log("No hit");}
        };

    //resizing
    mount.addEventListener("click", handleClick);
    const cleanupResize = resizeScript(camera, renderer, mount);
    
    //animation
    const cleanupAnimation = animationScript(() => {
        controls.update();
        renderer.render(scene, camera);
    }, camera, {
        startZ: 200,
        endZ: 500,
        introDuration: 360
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