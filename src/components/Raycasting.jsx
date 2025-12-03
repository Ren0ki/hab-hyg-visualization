    import * as THREE from 'three';

    export function Raycast(renderer, camera, instanced, onClickStar)
    {
    //------HANDLE RAYCASTING------//
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2;
        
        const handleClick = (event) => {
        const rect = mount.getBoundingClientRect();  //mouse position
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y=((event.clientY - rect.top) / rect.height) * 2 - 1;
        raycaster.setFromCamera(mouse, camera);
        const hit = raycaster.intersectObject(instanced);

        if(hit.length > 0){
            const instanceID = hit[0].instanceID;
            console.log("Clicked: ", star);
            onClickStar && onClickStar(data[instanced]);
        }

        renderer.domElement.addEventListener("Click", click);
    };
}