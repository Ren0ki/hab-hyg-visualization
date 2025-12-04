//     import * as THREE from 'three';

//     export function Raycasting(renderer, camera, instanced, onClickStar)
//     {
//         const raycaster = new THREE.Raycaster();
//         const mouse = new THREE.Vector2;
        
//         const handleClick = (event) => {
//         const rect = mount.getBoundingClientRect();  //mouse position
//         mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
//         mouse.y=((event.clientY - rect.top) / rect.height) * 2 - 1;
//         raycaster.setFromCamera(mouse, camera);
//         const hit = raycaster.intersectObject(instanced);

//         if(hit.length > 0){
//             onClickStar(hit[0].instanceID);
//             console.log("Clicked: ", star);
//             onClickStar && onClickStar(data[instanced]);
//         }
//         renderer.domElement.addEventListener("Click", click);
//     };
// }