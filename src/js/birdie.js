const birdie = {
    game: null,
    // maxAnimationStep: 3,
    frames: [
        {sx: 6, sy: 982},
        {sx: 62, sy: 982},
        {sx: 118, sy: 982}
    ],
    width: 34,
    height: 24,
    x: 0,
    y: 0,
    fallSpeed: 0,
    maxFallSpeed: 7,
    maxOffset: 0,

    update() {
        this.render();
    },

    init(game) {
        this.game = game;
        this.x = this.width / 2;
        this.y = game.canvas.height / 2;
    },

    render() {
        this.game.ctx.save();
        this.game.ctx.translate(this.x, this.y);
        this.game.ctx.rotate(0);
        this.game.renderSpriteFrame({
            sx: this.frames[0].sx,
            sy: this.frames[0].sy,
            sw: this.width,
            sh: this.height,
            dx: -this.width / 4,
            dy: -this.height / 2,
            dw: this.width,
            dh: this.height,
        });
        this.game.ctx.restore();
    }
}

export default birdie