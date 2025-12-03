//imports
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import data from '../local-data/data.json';

export default function Stars(onClickStar)
{
    //Initialize mountToDom, use to insert element into DOM
    const mountRef = useRef();

    useEffect(() => {

        //Initializing variables
        const mount = mountRef.current; //construct mounting var
        const scene = new THREE.Scene(); //construct scene
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 1, 1e7); //construct camera
        const renderer = new THREE.WebGLRenderer({antialias: true}); //enable WebGL antialiasing
        const controls = new OrbitControls(camera, renderer.domElement);
        const count = rows.length; //number of json rows
        const sphereGeometry = new THREE.SphereGeometry(3, 8, 8);  //sphere geometry for instancing 
        const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffffff}); //apply mesh material
        const raycaster = new THREE.Raycaster();   //raycast for interaction
        const mouse = new THREE.Vector2; //mouse position
        const rect = mount.getBounding(); //return mouse position
        const hit = raycaster.intersectObject(instanced); //interaction between mouse and sphere
        
        camera.position.z = 500; //camera poistion on z-axis

        //set renderer
        renderer.setSize(mount.clientWidth, mount.clientHeight); //replaced window with mount
        mount.appendChild(renderer.domElement); //replaced document.body with mount

        //dampening for momentum
        controls.enableDamping = true; 

        //holder vars outside fetch
        let rows = [];
        let instanced;

        //parse json file
                for(let i = 0; i < data.length; i++)
                {
                    let row = data[i];
                    let x = Number(row.Xg);
                    let y = Number(row.Yg);
                    let z = Number(row.Zg);

                    if (isNaN(x) || isNaN(y) || isNaN(z)) continue;
                    rows.push([x, y, z]);
                }

                console.log("Parsed rows: ", rows.length);
                console.log("Instanced mesh count: ", count);

                instanced = new THREE.InstancedMesh(sphereGeometry, sphereMaterial, count); //mesh instance
                const temp = new THREE.Object3D(); //place holder

                //loop through rows and place spheres
                for (let i = 0; i < count; i++)
                {
                    let [x, y, z] = rows[i]; //rows
                    let scale = 20;
                    temp.position.set(x * scale, y * scale, z * scale); //set position
                    temp.updateMatrix(); //update
                    instanced.setMatrixAt(i, temp.matrix); //use temp for instance
                }

                scene.add(instanced); //add instance sphere
        

        const handleClick = (event) => {

        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1; //mouse x pos
        mouse.y=((event.clientY - rect.top) / rect.height) * 2 - 1; //mouse y pos

        raycaster.setFromCamera(mouse, camera);

        //return mouse activity
        if(hit.length > 0){
            const instanceID = hit[0].instanceID;
            console.log("Clicked: ", star);
            onClickStar && onClickStar(data[instanced]);
        }
    };

    //handle initeraction
    mount.addEventListener("Click", handleClick);

    //window resize function, will separate later
        const handleResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };

        window.addEventListener("resize", handleResize);

    //animation function, will separate later
        function animate(){
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
        animate(); //execute

        //cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            mount.removeEventListener("click", handleClick);
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };

    }, [onClickStar]);

    return(<div ref={mountRef} style={{width: "100vw", height: "100vh", overflow: "hidden"}}/>);

}
