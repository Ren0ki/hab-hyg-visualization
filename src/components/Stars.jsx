//imports
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import data from '../local-data/data.json';
//import { Raycasting } from './Raycasting';

export default function Stars({onClickStar})
{
    //define mountToDom, use to insert element into DOM
    const mountRef = useRef();
    const rows = [];

    useEffect(() => {

    //------INIITIALIZING ENVIRONMENT VARIABLES------//
        console.log("BEFORE MOUNT:", mountRef.current);
        const mount = mountRef.current; //construct mounting var
        console.log("AFTER MOUNT:", mountRef.current);
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
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        instanced.raycast =  THREE.InstancedMesh.prototype.raycast;
        instanced.instanceMatrix.needsUpdate = true;
        
        const handleClick = (event) => {
        console.log("Click detected");

        const rect = mount.getBoundingClientRect();  //mouse position
        console.log("Boudning rect: ", rect);

        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y= -((event.clientY - rect.top) / rect.height) * 2 + 1; //normalized y should be POSITIVE
        console.log("Mouse normalized: ", mouse);

        raycaster.setFromCamera(mouse, camera);
        const hit = raycaster.intersectObject(instanced);
        console.log("Raycast hits: ", hit);

        if(hit.length > 0){
            console.log("HIT instanceID: ", hit[0].instanceId);
            const instanceID = hit[0].instanceId;
            onClickStar && onClickStar(data[instanceID]);
        }
        else{
            console.log("No hit");
        }
    };

    //------HANDLE RESIZING------//

    mount.addEventListener("click", handleClick);

        const handleResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };

        window.addEventListener("resize", handleResize);

    //------HANDLE ANIMATION------//

        function animate(){
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }

        animate(); //execute

    //------HANDLE CLEANUP------//
        return () => {
            window.removeEventListener("resize", handleResize);
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