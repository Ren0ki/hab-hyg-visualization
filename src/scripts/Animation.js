        export function animationScript(callback, camera, {
            
            //animation parameters
            startZ = 300,
            endZ = 500,
            introDuration = 129

        } = {}){
            
            let frameId = null; //initialize frame id
            let introProgress = 0; //starting state for camera timeline
            camera.position.z = startZ; //starting position on z-axis
            
            const animate = () => {
                callback(); //prevent recalling on update
                frameId = requestAnimationFrame(animate); //store frame id

                //loop until full animation is satisfied
                if(introProgress < introDuration){
                    const t = introProgress / introDuration; //amount completed
                    const eased = t * t * (3 - 2 * t); //standard easing formula
                    camera.position.z = startZ + (endZ - startZ) * eased; //camera position with ease
                    introProgress++; //increase until end
                }

            };
        
            animate(); //execute
            return () =>{ cancelAnimationFrame(frameId)};
    }