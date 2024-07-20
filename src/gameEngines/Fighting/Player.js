import { Controls } from "./Controls";
import { Fighter } from "./Fighter";

export class Player extends Fighter {
    controls = null;

    constructor(x, y, canvas, ctx, spriteSheet) {
        super(x, y, canvas, ctx, spriteSheet);
        this.controls = new Controls();
    }

    downAction() {
        if (this.controls?.down && this.position.y) {
            this.height = 200; // temporarily simulate fighter is down (sitting)

            if (
                this.canvas &&
                !this.verticalAcceleration &&
                this.position.y >= this.canvas?.height - 500 - this.height
            ) {
                this.position.y = this.canvas?.height - 500 + 200;
            }
        }

        if (!this.controls?.down && this.position.y) {
            this.height = 400; // temporarily simulate fighter is up

            if (
                this.canvas &&
                !this.verticalAcceleration &&
                this.position.y >= this.canvas?.height - 500
            ) {
                this.position.y = this.canvas?.height - 500;
            }
        }
    }

    upAction() {
        if (
            this.controls?.up && 
            this.position.y !== null && 
            this.canvas
        ) {
            if (
                this.verticalAcceleration === 0 && 
                this.position.y >= (this.canvas.height - 500)
            ) {
                this.verticalAcceleration = 50;
            }
        }
    }

    leftAction() {
        if (this.controls?.left && this.position.x !== null) {
            if (this.position.x > 0) {
                this.position.x -= 10;
            } else if (this.position.x <= 0) {
                this.position.x = 0;
            }
        }
    }

    rightAction() {
        if (this.controls?.right && this.canvas && this.position.x !== null) {
            if (this.position.x + this.width < this.canvas?.width) {
                this.position.x += 10;
            } else if (this.position.x + this.width >= this.canvas?.width) {
                this.position.x = this.canvas?.width - this.width;
            }
        }
    }

    update() {
        this.downAction();
        this.upAction();
        this.leftAction();
        this.rightAction(); 
    }
}
