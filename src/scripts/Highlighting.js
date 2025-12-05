import * as THREE from "three";

export function highlightScript(instanced){

    const temp = new THREE.Object3D();
    let selectedId = null;

    const scales = {}; //initial scales
    const targetScales = {}; //scale after seletcion

    const normalScale = 1; //standard scale
    const highlightedScale = 3; //scale after selection
    const easeSpeed = 0.1; //ease var

    function starHighlight(id){
        targetScales[id] = highlightedScale; //assign highlight val to chosen star
    }

    function clearHighlight(id){
        targetScales[id] = normalScale; //return to normal when next star is clicked
    }

    function highlightStar(id){
        if (selectedId !== null && selectedId !== id){
            clearHighlight(selectedId); //clear previously clicked
        }

        //update id for chosen star
        starHighlight(id);
        selectedId = id;

    }

    function updateHighlight(){

        let changed = false; //unchanged state
        for(const idStr in targetScales){
            const id = Number(idStr);

            if (scales[id] === undefined) scales[id] = normalScale; //if scale id is n/a, return to normal state

            const current = scales[id]; //current star
            const target = targetScales[id]; //updated based on user's chosen star

            const newScale = current + (target - current) * easeSpeed; //scale animation from original state to highlighted state

            scales[id] = newScale; //new scale state

            instanced.getMatrixAt(id, temp.matrix);
            temp.matrix.decompose(temp.position, temp.quaternion, temp.scale);

            temp.scale.set(newScale, newScale, newScale);
            temp.updateMatrix();

            instanced.setMatrixAt(id, temp.matrix);
            changed = true;

        }

        if (changed) instanced.instanceMatrix.needsUpdate = true; //update if star state has changed

    }

    return {highlightStar, updateHighlight}

}