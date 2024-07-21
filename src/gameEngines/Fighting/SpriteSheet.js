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

    counter = 0;
    xRange = 0;
    xStart = 1;
    maxCountTo = 10;


    constructor(spriteSheetName = null, context) {
        this.image = new Image();
        this.image.src = fighterSheetsMap[spriteSheetName];
        this.context = context
    }

    getAnimationValues(animation) {
        switch (animation) {
            case 'idle':
                return {
                    yStart: 1,
                    xRange: 6,
                    speed: 10,
                }
            default:
                return {
                    yStart: 1,
                    xRange: 6,
                    speed: 10,
                }
        }
    }

    animate() {
        this.counter++;

        if (this.counter >= this.maxCountTo) {
            this.xStart++;
            this.counter = 0;
        }

        if (this.xStart >= this.xRange) {
            this.xStart = 1;
        }
    }

    draw(x, y, height) {
        const { yStart, xRange, speed } = this.getAnimationValues('idle');

        this.xRange = xRange;
        this.maxCountTo = speed;

        this.animate();
        
        if (this.image) {
            const oneImageSize = 32;
            const clipWidth = 32;
            const clipHeight = 32;
            const placeImageX = x
            const placeImageY = y + height - this.size
            const widthImage = this.size;
            const heightImage = this.size;

            this.context.imageSmoothingEnabled = false;

            this.context.drawImage(
                this.image,
                this.xStart * oneImageSize,
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