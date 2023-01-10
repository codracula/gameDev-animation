class BigHill {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        //this.spritesheet = ASSET_MANAGER.getAsset("./sprites/someimage.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 86, 0, 80, 40, this.x - this.game.camera.x, this.y,)
    };
}