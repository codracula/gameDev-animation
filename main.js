const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/uba25.png");
//ASSET_MANAGER.queueDownload('./sprites/uba.png');

ASSET_MANAGER.downloadAll(() => {

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	gameEngine.addEntity(new Uba(gameEngine));
	gameEngine.init(ctx);

	gameEngine.start();
});
