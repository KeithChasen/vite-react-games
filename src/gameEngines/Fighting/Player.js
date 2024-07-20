import { Controls } from "./Controls";
import { Fighter } from "./Fighter";

export class Player extends Fighter {
    controls = null;

    constructor(x, y, canvas, ctx) {
        super(x, y, canvas, ctx);
        this.controls = new Controls();
    }

    update() {
        if (this.controls?.up && this.position.y !== null) {
            this.position.y -= 10;
        }

        if (this.controls?.down && this.position.y !== null) {
            this.position.y += 10;
        }

        if (this.controls?.left && this.position.x !== null) {
            this.position.x -= 10;
        }

        if (this.controls?.right && this.position.x !== null) {
            this.position.x += 10;
        }
    }
}
