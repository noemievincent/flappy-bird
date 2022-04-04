import birdie from "./birdie";

const gameController = {
    init(game) {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'z') {
                if (!game.hasStarted) {
                    game.hasStarted = true;
                }
                birdie.goUp();
            }
        })
    }
}

export default gameController