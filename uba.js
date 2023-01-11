class Uba {
    constructor(game) {
        //this.game = game;
        this.speed = 25;
        this.x = 0;
        this.y = 0;


        Object.assign(this, {game});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/uba25.png");
        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation = new Animator(this.spritesheet, 2,79,64, 19, 4, .3, 2);
        this.animation2 = new Animator(this.spritesheet, 2,79,64, 19, 4, .25, 2);
        this.animation3 = new Animator(this.spritesheet, 2,79,64, 19, 4, .1, 2);
        //this.loadAnimations(spritesheet);
    }

    update() {
        if (this.x > 400) {
            this.x -= 400;
        }
        this.x += this.speed * this.game.clockTick;

    }
    draw(ctx) {

        this.animation.drawFrame(this.game.clockTick, ctx, this.x * 0 + 450,this.y + 660, 1);
        this.animation.drawFrame(this.game.clockTick, ctx, this.x * 0 + 200,this.y + 660, 1);
        this.animation.drawFrame(this.game.clockTick, ctx, this.x * 0 + 650,this.y + 660, 1);
        this.animation.drawFrame(this.game.clockTick, ctx, this.x * 0 + 50,this.y + 660, 1);
        this.animation.drawFrame(this.game.clockTick, ctx, this.x * 0 + 270,this.y + 660, 1);

        this.animation2.drawFrame(this.game.clockTick, ctx, this.x * 5.5 - 800,this.y + 650, 4);
        this.animation2.drawFrame(this.game.clockTick, ctx, this.x * 5.5 - 300,this.y + 650, 4);
        this.animation2.drawFrame(this.game.clockTick, ctx, this.x * 6 - 1200,this.y + 650, 4);


        this.animation3.drawFrame(this.game.clockTick, ctx, this.x * 12 - 800,this.y + 620, 8);
        this.animation3.drawFrame(this.game.clockTick, ctx, this.x * 20 - 400,this.y + 620, 8);
        this.animation3.drawFrame(this.game.clockTick, ctx, this.x * 12 - 1500,this.y + 620, 8);
        this.animation3.drawFrame(this.game.clockTick, ctx, this.x * 12 -3000,this.y + 620, 8);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/uba25.png"), 1, 79, 65, 19, 0, 0, 65, 19);

    }
}