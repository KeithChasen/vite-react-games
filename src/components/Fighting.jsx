import { useEffect, useRef } from "react";
import { Player } from "../gameEngines/Fighting/Player";

function Fighting() {
    const canvasRef = useRef(null);

    useEffect(() => {        
        const canvas = canvasRef?.current;
        const c = canvas?.getContext('2d');

        const player = canvas && c ?
            new Player(
                100, 
                canvas.height - 500, 
                canvas, 
                c,
                'v' // todo: select fighter and pass it here
            )
            : null;
        
        const animate = () => {
            requestAnimationFrame(animate);
            if (c && canvas && player) {
                c.clearRect(0, 0, canvas.width, canvas.height)
                player.update();
                player.draw();
            }
            
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
