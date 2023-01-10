class Uba {
    constructor(game, x ,y) {
        //this.game = game;

        Object.assign(this, {game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/uba25.png");
        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation = new Animator(this.spritesheet, 1,79,65, 19, 4, .1, 1);

        //this.loadAnimations(spritesheet);
    }

    update() {

    }
    draw(ctx) {

        this.animation.drawFrame(this.game.clockTick, ctx, 0,0,3);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/uba25.png"), 1, 79, 65, 19, 0, 0, 65, 19);

    }
}