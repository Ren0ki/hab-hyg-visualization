import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function sceneScript(mount){
        const scene = new THREE.Scene(); //construct scene
            const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 1, 1e7); //construct camera
            camera.position.z = 500; //camera poistion on z-axis
            const renderer = new THREE.WebGLRenderer({antialias: true}); //enable WebGL antialiasing
            renderer.setSize(mount.clientWidth, mount.clientHeight); //replaced window with mount
            mount.appendChild(renderer.domElement); //replaced document.body with mount
            const controls = new OrbitControls(camera, renderer.domElement); //make controls to orbit scene
            controls.enableDamping = true; //dampening effect for movement momentum

            return{scene, camera, renderer, controls, domElement: renderer.domElement};
}