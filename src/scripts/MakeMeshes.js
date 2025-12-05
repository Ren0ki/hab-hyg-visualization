import * as THREE from 'three';

export function meshScript(rows, scale = 20)
{
                    const count = rows.length;
                    const sphereGeometry = new THREE.SphereGeometry(3, 8, 8);
                    const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
                    const instanced = new THREE.InstancedMesh(sphereGeometry, sphereMaterial, count); //mesh instance
                    const temp = new THREE.Object3D(); //place holder
    
                    for (let i = 0; i < count; i++)
                    {
                        const [x, y, z] = rows[i]; //rows
                        temp.position.set(x * scale, y * scale, z * scale); //set position
                        temp.updateMatrix(); //update
                        instanced.setMatrixAt(i, temp.matrix); //use temp for instance
                    }
                    instanced.instanceMatrix.needsUpdate = true;

                    return instanced;
}