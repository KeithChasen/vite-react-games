export class Fighter {
    position = {
        x: null,
        y: null
    }

    canvas = null;
    ctx = null;

    width = 50;
    height = 100;

    kickMask = {
        x: null,
        y: null
    }

    constructor(x, y, canvas, ctx) {
        this.position.x = x;
        this.position.y = y;
        this.canvas = canvas;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }
}