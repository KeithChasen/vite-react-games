import { useRef } from "react";

function Fighting() {
    const canvasRef = useRef(null);
    const canvas = canvasRef?.current;
    const c = canvas?.getContext('2d');

    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        console.log({
            canvas, c
        });
    }

    return (
        <>
            Fighting
            <canvas ref={canvasRef}></canvas>
        </>
    );
}

export default Fighting;
