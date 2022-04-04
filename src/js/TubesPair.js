export class TubesPair {
    constructor(game) {
        this.game = game;
        this.spaceBetweenTubes = 80;
        this.x = game.canvas.width;
        this.speed = 3;
        this.width = 52;
        this.height = 317;
        this.yTop = -Math.floor(Math.random() * 280) - 25;
        this.yBottom = this.yTop + this.height + this.spaceBetweenTubes;
        this.speed = 3;
        this.topTubeFrame = {
            sx: 113,
            sy: 647,
            sw: this.width,
            sh: this.height,
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height
        };
        this.bottomTubeFrame = {
            sx: 168,
            sy: 647,
            sw: this.width,
            sh: this.height,
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height
        };
    }

    update() {
        this.x -= this.speed;
        this.render();
    }

    render() {
        // Top tube
        this.game.ctx.save();
        this.game.ctx.translate(this.x, this.yTop);
        this.game.renderSpriteFrame(this.topTubeFrame);
        this.game.ctx.restore();

        // Bottom tube
        this.game.ctx.save();
        this.game.ctx.translate(this.x, this.yBottom);
        this.game.renderSpriteFrame(this.bottomTubeFrame);
        this.game.ctx.restore();
    }
}