//imports
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import data from '../local-data/data.json';

export default function Stars()
{
    //define mountToDom, use to insert element into DOM
    const mountRef = useRef();

    useEffect(() => {

        //construct scene and camera setup
        const mount = mountRef.current; //construct mounting var
        const scene = new THREE.Scene(); //construct scene
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 1, 1e7); //construct camera
        camera.position.z = 500; //camera poistion on z-axis

        //construct renderer, react uses mounting for insertion instead of window display
        const renderer = new THREE.WebGLRenderer({antialias: true}); //enable WebGL antialiasing
        renderer.setSize(mount.clientWidth, mount.clientHeight); //replaced window with mount
        mount.appendChild(renderer.domElement); //replaced document.body with mount

        //construct control (pan, zoom) -> will change to other script later
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; 

        //holder vars outside fetch
        let rows = [];
        let instanced;

                for(let i = 0; i < data.length; i++)
                {
                    const row = data[i];
                    const x = Number(row.Xg);
                    const y = Number(row.Yg);
                    const z = Number(row.Zg);

                    if (isNaN(x) || isNaN(y) || isNaN(z)) continue;
                    rows.push([x, y, z]);
                }

                console.log("Parsed rows: ", rows.length);
                const count = rows.length;

                //sphere geometry for instancing 
                const sphereGeometry = new THREE.SphereGeometry(3, 8, 8);
                const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});

                console.log("Instanced mesh count: ", count);

                instanced = new THREE.InstancedMesh(sphereGeometry, sphereMaterial, count); //mesh instance
                const temp = new THREE.Object3D(); //place holder

                //loop through rows and place spheres
                for (let i = 0; i < count; i++)
                {
                    const [x, y, z] = rows[i]; //rows
                    const scale = 20;
                    temp.position.set(x * scale, y * scale, z * scale); //set position
                    temp.updateMatrix(); //update
                    instanced.setMatrixAt(i, temp.matrix); //use temp for instance
                }

                scene.add(instanced); //add instance sphere
        
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
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };

    }, []);

    return(<div ref={mountRef} style={{width: "100vw", height: "100vh", overflow: "hidden"}}/>);

}
