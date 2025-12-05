import * as THREE from 'three';

        const raycaster = new THREE.Raycaster(); ///construct raycaster for collision
        const mouse = new THREE.Vector2(); //mosuse for collision

        export function setupRaycastScript(instanced)
        {
            instanced.raycast =  THREE.InstancedMesh.prototype.raycast; //mesh for collision
            instanced.instanceMatrix.needsUpdate = true; //update instance
        }
        
        export function raycastScript(event, mount, camera, instanced, onHit)
        {
            const rect = mount.getBoundingClientRect();
        
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1; //normalized mouse x pos
        mouse.y= -((event.clientY - rect.top) / rect.height) * 2 + 1; //normalized y should be POSITIVE
        raycaster.setFromCamera(mouse, camera);
        const intersections = raycaster.intersectObject(instanced);

        if(intersections.length > 0){
            const hit = intersections[0];
            if(onHit) onHit(hit);
        }
    }