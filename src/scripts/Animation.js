        export function animationScript(callback, camera, {
            startZ = 300,
            endZ = 500,
            introDuration = 129
        } = {}){
    
            let frameId = null;
            let introProgress = 0;
            camera.position.z = startZ;
            
            const animate = () => {
                callback();
                frameId = requestAnimationFrame(animate);

                if(introProgress < introDuration){
                    const t = introProgress / introDuration;
                    const eased = t * t * (3 - 2 * t);
                    camera.position.z = startZ + (endZ - startZ) * eased;
                    introProgress++;
                }

            };
        
            animate(); //execute
            return () =>{ cancelAnimationFrame(frameId)};
    }