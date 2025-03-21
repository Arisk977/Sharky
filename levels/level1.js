const level1 = new Level(
    [new Enemy(), new Enemy(), new Enemy(), new Enemy(), new Endboss()],
    [
        new BackgroundObject('assets/3. Background/Layers/5. Water/D1.png', -719*2),
        new BackgroundObject('assets/3. Background/Layers/4.Fondo 2/D1.png', -719*2),
        new BackgroundObject('assets/3. Background/Layers/3.Fondo 1/D1.png', -719*2),
        new BackgroundObject('assets/3. Background/Layers/2. Floor/D1.png', -719*2),
        new BackgroundObject('assets/3. Background/Layers/1. Light/1.png', -719*2),
        new BackgroundObject('assets/3. Background/Layers/5. Water/D2.png', -719),
        new BackgroundObject('assets/3. Background/Layers/4.Fondo 2/D2.png', -719),
        new BackgroundObject('assets/3. Background/Layers/3.Fondo 1/D2.png', -719),
        new BackgroundObject('assets/3. Background/Layers/2. Floor/D2.png', -719),
        new BackgroundObject('assets/3. Background/Layers/1. Light/2.png', -719),

        new BackgroundObject('assets/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('assets/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('assets/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('assets/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('assets/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('assets/3. Background/Layers/5. Water/D2.png', 719),
        new BackgroundObject('assets/3. Background/Layers/4.Fondo 2/D2.png', 719),
        new BackgroundObject('assets/3. Background/Layers/3.Fondo 1/D2.png', 719),
        new BackgroundObject('assets/3. Background/Layers/2. Floor/D2.png', 719),
        new BackgroundObject('assets/3. Background/Layers/1. Light/2.png', 719),

        new BackgroundObject('assets/3. Background/Layers/5. Water/D1.png', 719*2),
        new BackgroundObject('assets/3. Background/Layers/4.Fondo 2/D1.png', 719*2),
        new BackgroundObject('assets/3. Background/Layers/3.Fondo 1/D1.png', 719*2),
        new BackgroundObject('assets/3. Background/Layers/2. Floor/D1.png', 719*2),
        new BackgroundObject('assets/3. Background/Layers/1. Light/1.png', 719*2),
        new BackgroundObject('assets/3. Background/Layers/5. Water/D2.png', 719*3),
        new BackgroundObject('assets/3. Background/Layers/4.Fondo 2/D2.png', 719*3),
        new BackgroundObject('assets/3. Background/Layers/3.Fondo 1/D2.png', 719*3),
        new BackgroundObject('assets/3. Background/Layers/2. Floor/D2.png', 719*3),
        new BackgroundObject('assets/3. Background/Layers/1. Light/2.png', 719*3),

        new BackgroundObject('assets/3. Background/Layers/5. Water/D1.png', 719*4),
        new BackgroundObject('assets/3. Background/Layers/4.Fondo 2/D1.png', 719*4),
        new BackgroundObject('assets/3. Background/Layers/3.Fondo 1/D1.png', 719*4),
        new BackgroundObject('assets/3. Background/Layers/2. Floor/D1.png', 719*4),
        new BackgroundObject('assets/3. Background/Layers/1. Light/1.png', 719*4),
        new BackgroundObject('assets/3. Background/Layers/5. Water/D2.png', 719*5),
        new BackgroundObject('assets/3. Background/Layers/4.Fondo 2/D2.png', 719*5),
        new BackgroundObject('assets/3. Background/Layers/3.Fondo 1/D2.png', 719*5),
        new BackgroundObject('assets/3. Background/Layers/2. Floor/D2.png', 719*5),
        new BackgroundObject('assets/3. Background/Layers/1. Light/2.png', 719*5),
    ], [
        new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), 
        new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), 
    ], 
    [new Audio('audio/aqua-temple-189227.mp3'), new Audio('audio/coin-257878_RdqkEEWL.mp3')
    ]
    
);