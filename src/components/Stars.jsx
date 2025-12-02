//imports
import { useEffect, useRef } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Stars()
{
    //define mountToDom, use to insert element into DOM
    const mountRef = useRef();

    useEffect(() => {

        //construct scene and camera setup
        const mount = mountRef.current; //construct mounting var
        const scene = new THREE.Scene(); //construct scene
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 1, 1e7); //construct camera
        camera.position.z = 500;

        //construct renderer, react uses mounting for insertion instead of window display
        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(mount.clientWidth, mount.clientHeight); //replaced window with mount
        mount.appendChild(renderer.domElement); //replaced document.body with mount

        //construct control (pan, zoom) -> will change to other script later
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        //holder vars outside fetch
        let rows = [];
        let instanced;

        //fetch data
        fetch('/data/data.csv')
            .then(res => res.text())
            .then(text => {
                const lines = text.trim().split('\n');

                //loop through csv
                for(let i = 1; i < lines.length; i++){
                    const parts = lines[i].split(',').map(v => Number(v.trim())); //separate by comma, convert string to number
                    if(parts.some(v => isNaN(v))) continue;
                    rows.push(parts);
                }

                const count = rows.length;

                //sphere geometry for instancing (set to circles later)
                const sphereGeometry = new THREE.SphereGeometry(3, 8, 8);
                const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});

                instanced = new THREE.InstancedMesh(sphereGeometry, sphereMaterial, count);
                const temp = new THREE.Object3D();

                //loop through rows and place spheres
                for (let i = 0; i < count; i++)
                {
                    const [x, y, z] = rows[i];
                    temp.position.set(x * 2, y * 2, z * 2);
                    temp.updateMatrix();

                    instanced.setMatrixAt(i, temp.matrix);
                }

                scene.add(instanced);
            });

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

    return(
        <div
            ref={mountRef}
            style={{width: "100vw", height: "100vh", overflow: "hidden"}}
        />
    );
}
