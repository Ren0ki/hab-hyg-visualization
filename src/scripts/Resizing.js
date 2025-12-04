export function resizeScript(camera, renderer, mount)
    {

        const handleResize = () => {
            const width = mount.clientWidth;
            const hieght = mount.clientHeight;
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }