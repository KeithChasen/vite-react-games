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

export class SpriteSheet {
    image = null;
    size = 400;
    context = null;

    constructor(spriteSheetName = null, context) {
        this.image = new Image();
        this.image.src = fighterSheetsMap[spriteSheetName];
        this.context = context
    }

    draw(x, y, height) {
        if (this.image) {
            const oneImageSize = 32;
            const xStart = 1;
            const yStart = 0;
            const clipWidth = 32;
            const clipHeight = 32;
            const placeImageX = x
            const placeImageY = y + height - this.size
            const widthImage = this.size;
            const heightImage = this.size;

            this.context.imageSmoothingEnabled = false;

            this.context.drawImage(
                this.image,
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
}