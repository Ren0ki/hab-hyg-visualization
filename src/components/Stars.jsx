//imports
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import data from '../local-data/data.json';
import { setupRaycastScript, raycastScript } from '../scripts/Raycasting';
import { resizeScript } from '../scripts/Resizing';
//import { Raycasting } from './Raycasting';

export default function Stars({onClickStar})
{
    //define mountToDom, use to insert element into DOM
    const mountRef = useRef();
    const rows = [];

    useEffect(() => {

    //------INIITIALIZING ENVIRONMENT VARIABLES------//
        const mount = mountRef.current; //construct mounting var
        const scene = new THREE.Scene(); //construct scene
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 1, 1e7); //construct camera
        camera.position.z = 500; //camera poistion on z-axis
        const renderer = new THREE.WebGLRenderer({antialias: true}); //enable WebGL antialiasing
        renderer.setSize(mount.clientWidth, mount.clientHeight); //replaced window with mount
        mount.appendChild(renderer.domElement); //replaced document.body with mount
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

    //------PARSING DATA------//
                for(let i = 0; i < data.length; i++)
                {
                    const row = data[i];
                    const x = Number(row.Xg);
                    const y = Number(row.Yg);
                    const z = Number(row.Zg);
                    if (isNaN(x) || isNaN(y) || isNaN(z)) continue;
                    rows.push([x, y, z]);
                }

    //------INITIALIZE STAR PROPERTY VARIABLES------//
                const count = rows.length;
                const sphereGeometry = new THREE.SphereGeometry(3, 8, 8);
                const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
                const instanced = new THREE.InstancedMesh(sphereGeometry, sphereMaterial, count); //mesh instance
                const temp = new THREE.Object3D(); //place holder

     //------APPLY STAR PROPERTIES------//
                for (let i = 0; i < count; i++)
                {
                    const [x, y, z] = rows[i]; //rows
                    const scale = 20;
                    temp.position.set(x * scale, y * scale, z * scale); //set position
                    temp.updateMatrix(); //update
                    instanced.setMatrixAt(i, temp.matrix); //use temp for instance
                }
                instanced.instanceMatrix.needsUpdate = true;
                scene.add(instanced); //add instance sphere
       
    //------HANDLE RAYCASTING------//

        instanced.raycast =  THREE.InstancedMesh.prototype.raycast;
        instanced.instanceMatrix.needsUpdate = true;
        
        const handleClick = (event) => {
        const hits = raycastScript(event, mount, camera, instanced,
        (hit) => {
            const id = hit.instanceId;
            onClickStar & onClickStar(data[id]);
        }
        )
        if(hits.length === 0){
            console.log("No hit");
        }
    };

    //------HANDLE RESIZING------//

    mount.addEventListener("click", handleClick);

const handleResize = resizeScript(camera, renderer, mount);

    //------HANDLE ANIMATION------//

        function animate(){
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }

        animate(); //execute

    //------HANDLE CLEANUP------//
        return () => {
            handleResize();
            mount.removeEventListener("click", handleClick);
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };

    }, [onClickStar]);

//------RETURN OUTPUT------//
    return(<div
  ref={mountRef}
  style={{
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    pointerEvents: "auto", // FORCE ENABLE
    position: "relative",
    background: "transparent"
  }}
/>
);
}