import VioletFighter from './images/sprites/32/v-40.png';
import BlackFighter from './images/sprites/32/d-40.png';
import GreenFighter from './images/sprites/32/g-40.png';
import BlueFighter from './images/sprites/32/b-40.png';
import RedFighter from './images/sprites/32/r-40.png';

const fighterSheetsMap = {
    v: VioletFighter,
    d: BlackFighter,
    g: GreenFighter,
    b: BlueFighter,
    r: RedFighter
}

export class Fighter {
    position = {
        x: null,
        y: null
    }

    spriteSheet = null;

    canvas = null;
    ctx = null;

    width = 150;
    height = 400;

    verticalAcceleration = 0;
    gravity = 20;

    handKickMask = {
        x: null,
        y: null,
        width: 150,
        height: 50,
        show: true,
    }

    legKickMask = {
        x: null,
        y: null,
        width: 250,
        height: 70,
        show: true,
    }

    constructor(x, y, canvas, ctx, spriteSheet) {
        this.position.x = x;
        this.position.y = y;
        this.canvas = canvas;
        this.ctx = ctx;
        
        if (spriteSheet) {
            this.setSpriteSheet(spriteSheet);
        }
    }

    setSpriteSheet(spriteSheet) {
        this.spriteSheet = new Image();
        this.spriteSheet.src = fighterSheetsMap[spriteSheet];
    }

    drawSprite() {
        if (this.spriteSheet) {
            const oneImageSize = 32;
            const xStart = 1;
            const yStart = 0;
            const clipWidth = 32;
            const clipHeight = 32;
            const placeImageX = this.position.x
            const placeImageY = this.position.y
            const widthImage = this.height; // because our sprite is square
            const heightImage = this.height;

            this.ctx.imageSmoothingEnabled = false;

            this.ctx.drawImage(
                this.spriteSheet,
                xStart * oneImageSize,
                yStart * oneImageSize,
                clipWidth,
                clipHeight,
                placeImageX,
                placeImageY,
                widthImage,
                heightImage,
            );

        }
    }

    useGravity() {
        if (this.position.y !== null && this.canvas) {
            if (this.position.y < (this.canvas.height - 500)) {
                this.position.y += this.gravity;
            }
        }

        if (this.verticalAcceleration > 0 && this.position.y && this.canvas) {
            this.position.y -= this.verticalAcceleration;
            this.verticalAcceleration--;
        }

        if (this.verticalAcceleration === 1) {
            this.verticalAcceleration = 0;
        }
    }

    update() {
        if (this.position.x && this.position.y) {
            this.handKickMask.x = this.position.x + this.width;
            this.handKickMask.y = this.position.y + this.height / 4;

            this.legKickMask.x = this.position.x + this.width;
            this.legKickMask.y = this.position.y + this.height / 2;
        }
    }

    drawHandKickMask() {
        this.ctx.fillStyle = 'red';

        if (this.handKickMask.show) {
            this.ctx.fillRect(
                this.handKickMask.x,
                this.handKickMask.y,
                this.handKickMask.width,
                this.handKickMask.height
            );
        }
    }

    drawLegKickMask() {
        this.ctx.fillStyle = 'green';

        if (this.legKickMask.show) {
            this.ctx.fillRect(
                this.legKickMask.x,
                this.legKickMask.y,
                this.legKickMask.width,
                this.legKickMask.height
            );
        }
    }

    draw() {
        this.useGravity();

        this.drawSprite();


        // draw player
        // this.ctx.fillStyle = 'black';

        // this.ctx.fillRect(
        //     this.position.x,
        //     this.position.y,
        //     this.width,
        //     this.height
        // );

        // draw kick masks
        // this.drawHandKickMask();
        // this.drawLegKickMask();
    }
}