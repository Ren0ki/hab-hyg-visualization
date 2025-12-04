        export function animationScript(callback){

            let frameId = null;
            
            const animate = () => {
                callback();
                frameId = requestAnimationFrame(animate);
            };
        
            animate(); //execute

            return () =>{ cancelAnimationFrame(frameId);
        };
    }