import { useEffect, useRef } from "react";
import { Player } from "../gameEngines/Fighting/Player";

function Fighting() {
    const canvasRef = useRef(null);

    useEffect(() => {        
        const canvas = canvasRef?.current;
        const c = canvas?.getContext('2d');

        const player = canvas && c ?
            new Player(10, 10, canvas, c)
            : null;
        
        const animate = () => {
            requestAnimationFrame(animate);
            player.draw();
        }
    
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            animate();
        }
    }, []);

    return (
        <>
            Fighting
            <canvas ref={canvasRef}></canvas>
        </>
    );
}

export default Fighting;
