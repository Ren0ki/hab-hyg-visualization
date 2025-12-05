import * as THREE from "three";

export function highlightScript(instanced){

    const temp = new THREE.Object3D();
    let selectedId = null;

    const scales = {};
    const targetScales = {};

    const normalScale = 1;
    const highlightedScale = 3;
    const easeSpeed = 0.1;

    function starHighlight(id){
        targetScales[id] = highlightedScale;
    }

    function clearHighlight(id){
        targetScales[id] = normalScale;
    }

    function highlightStar(id){
        if (selectedId !== null && selectedId !== id){
            clearHighlight(selectedId);
        }

        starHighlight(id);
        selectedId = id;

    }

    function updateHighlight(){
        let changed = false;
        for(const idStr in targetScales){
            const id = Number(idStr);

            if (scales[id] === undefined) scales[id] = normalScale;

            const current = scales[id];
            const target = targetScales[id];

            const newScale = current + (target - current) * easeSpeed;

            scales[id] = newScale;

            instanced.getMatrixAt(id, temp.matrix);
            temp.matrix.decompose(temp.position, temp.quaternion, temp.scale);

            temp.scale.set(newScale, newScale, newScale);
            temp.updateMatrix();

            instanced.setMatrixAt(id, temp.matrix);
            changed = true;
            
        }

        if (changed) instanced.instanceMatrix.needsUpdate = true;

    }

    return {highlightStar, updateHighlight}

}