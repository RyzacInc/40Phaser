import elements from "../elements.js";
import state from "../state.js";

export default class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: "EndScene" });
    }

    preload() {}

    create() {
        elements.appEnd.style.visibility = "visible";
        elements.appEnd.style.display = "flex";
        elements.appEnd.style.marginTop = "10%";

        // TODO: Update display score once gameState is implemented
        // elements.endScoreDisplay.innerHTML = `Score: ${}`
        elements.buttonGameReplay.onclick = function() {
            elements.appEnd.style.visibility = "invisible";
            elements.appEnd.style.display = "none";
            this.scene.stop("EndScene");
            this.scene.start("GameScene");
        }.bind(this);
    }
}
