class YouLose extends MovableObject {
    width = 350;
    height = 100;
    IMAGES_GAMEOVER = [
        'assets/6.Botones/Tittles/Game Over/Recurso 9.png',
        'assets/6.Botones/Tittles/Game Over/Recurso 10.png',
        'assets/6.Botones/Tittles/Game Over/Recurso 11.png',
        'assets/6.Botones/Tittles/Game Over/Recurso 12.png',
        'assets/6.Botones/Tittles/Game Over/Recurso 13.png',

    ];
    constructor(x) {
        super().loadImage('assets/6.Botones/Tittles/Game Over/Recurso 9.png');
        this.x = x + 180;
        this.y = 80;
        this.loadMultipleImages(this.IMAGES_GAMEOVER);
        this.animate();
        this.addEndscreenButton();
    }

    /**
     * Starts the game over animation by cycling through the images in `IMAGES_GAMEOVER`
     * at a fixed interval.
     */
    animate() {
        this.setStoppableInterval(() => this.useAnimation(this.IMAGES_GAMEOVER), 400);
    }


}

