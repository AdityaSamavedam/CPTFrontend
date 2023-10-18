import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class Background extends GameObject {
    constructor(canvas, image, speedRatio) {
        super(canvas, image, speedRatio);
    }
    update() {
        this.x = (this.x - this.speed) % this.width;
    }
    draw() {
        this.ctx.drawImage(this.image, this.x, this.y);
        this.ctx.drawImage(this.image, this.x + this.width, this.y);
    }
}

export function initBackground(canvas, image, speedRatio) {
    // Build game object
    var background = new Background(canvas, image, speedRatio);

    // Setup background constant to adjust display size
    const ADJUST = 1.42 // visual layer adjust, use "1"" for a perfect loop 

    // Set Dimensions to match the image width
    const canvasWidth = GameEnv.innerWidth;
    const canvasHeight = canvasWidth / background.aspect_ratio;  // height is oriented by width
    const canvasLeft = 0; // Start image from the left edge horizontally

    // Set dimensions for the background canvas
    canvas.width = background.width / ADJUST;
    canvas.height = background.height / ADJUST;
    // Set Style properties for the background canvas
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    canvas.style.position = 'absolute';
    canvas.style.left = `${canvasLeft}px`;
    canvas.style.top = `${GameEnv.top}px`;

    return background;
}

export default Background;