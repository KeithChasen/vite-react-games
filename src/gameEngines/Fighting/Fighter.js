export class Fighter {
    position = {
        x: null,
        y: null
    }

    canvas = null;
    ctx = null;

    width = 150;
    height = 400;

    handKickMask = {
        x: null,
        y: null,
        width: 150,
        height: 50
    }

    legKickMask = {
        x: null,
        y: null,
        width: 250,
        height: 70
    }

    constructor(x, y, canvas, ctx) {
        this.position.x = x;
        this.position.y = y;
        this.canvas = canvas;
        this.ctx = ctx;
    }

    update() {
        if (this.position.x && this.position.y) {
            this.handKickMask.x = this.position.x + this.width;
            this.handKickMask.y = this.position.y + this.height / 4;

            this.legKickMask.x = this.position.x + this.width;
            this.legKickMask.y = this.position.y + this.height / 2;
        }
    }

    draw() {
        // draw player
        this.ctx.fillStyle = 'black';

        this.ctx.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

        // draw kick masks
        this.ctx.fillStyle = 'red';

        this.ctx.fillRect(
            this.handKickMask.x,
            this.handKickMask.y,
            this.handKickMask.width,
            this.handKickMask.height
        );

        this.ctx.fillStyle = 'green';

        this.ctx.fillRect(
            this.legKickMask.x,
            this.legKickMask.y,
            this.legKickMask.width,
            this.legKickMask.height
        );
    }
}