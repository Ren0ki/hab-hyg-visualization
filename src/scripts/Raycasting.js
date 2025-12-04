import * as THREE from 'three';

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        export function setupRaycastScript(instanced)
        {
            instanced.raycast =  THREE.InstancedMesh.prototype.raycast;
            instanced.instanceMatrix.needsUpdate = true;
        }
        
        export function raycastScript(event, mount, camera, instanced, onHit)
        {
            const rect = mount.getBoundingClientRect();
        
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y= -((event.clientY - rect.top) / rect.height) * 2 + 1; //normalized y should be POSITIVE
        raycaster.setFromCamera(mouse, camera);
        const intersections = raycaster.intersectObject(instanced);

        if(intersections.length > 0){
            const hit = intersections[0];
            if(onHit) onHit(hit);
        }
    }