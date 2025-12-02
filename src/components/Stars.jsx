//imports
import { useEffect, useRef } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export default function Stars()
{
    //define mountToDom, use to insert element into DOM
    const mountToDom = useRef();


    useEffect(() => {


    //construct scene and camera setup
    const mount = mountToDom.current; //construct mounting var
    const scene = new THREE.Scene(); //construct scene
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1e7); //construct camera
    camera.position.z = 500;


    const renderer = new THREE.WebGLRenderer({antialias: true});  //construct renderer, react uses mounting for insertion instead of window display
    renderer.setSize(mount.clientWidth, mount.clientHeight); //replaced window with mount
    mount.appendChild(renderer.domElement); //replaced document.body with mount


    const controls = new OrbitControls(camera, renderer.domElement); //construct control (pan, zoom) -> will change to other script later


    //fetch data
    fetch('/data/stars.csv')
        .then(res => res.text())
        .then(text => {
            const lines = text.trim().split('\n');
            const positions = []; //position array
            const colors = []; //color array
            const color = new THREE.Color(); //individual colors


    //loop through csv
    for(let i = 1; i < lines.length; i++){
            const[x, y, z] = lines[i].split(',').map(Number); //separate by comma, convert string to number


                //debug, might remove later
                if (isNaN(x) || isNaN(y) || isNaN(z)) {
                console.warn("Bad CSV row:", i, lines[i]);
                continue; // skip it
    }


            positions.push(x * 5, y * 5, z * 5); //set pos to scale 5


            //set colors
            const intensity = 1 - Math.min(Math.abs(z) / 100, 1); //color intensity, rgb
            color.setRGB(intensity, intensity, intensity);  //set from const intensity
            colors.push(color.r, color.g, color.b); //execute colors
    }


        //construct geometry (set to spheres later)
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));


        //set material attributes, will convert from points to spheres
        const material = new THREE.PointsMaterial({
            size: 4,
            vertexColors: true,
            transparent: true
    });


        //draw stars
        const stars = new THREE.Points(geometry, material); //assign shapes and material to coordinates
        scene.add(stars); //insert star
     });


        //animation function, no content yet
        function animate(){
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
     }
        animate(); //execute


        return () => mount.removeChild(renderer.domElement);
    }, []);


return <div ref={mountToDom} style={{ width: "100vw", height: "100vh" }} />;
}

