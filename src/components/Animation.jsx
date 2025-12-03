import * as THREE from 'three';

export function Animation(controls, renderer, scene, camera)
{

        function animate ()
        {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();
}