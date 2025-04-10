let level1;
function levelInit(){
    level1 = new Level(
        [new PufferFishGreen(), new PufferFishGreen(), new PufferFishGreen(), new PufferFishGreen(), new PufferFishOrange(), new PufferFishOrange(),
        new PufferFishRed(), new PufferFishRed(), new PufferFishRed(), new PufferFishRed(), new PufferFishRed(), new JellyPink(600), new JellyViolett(800), new JellyYellow(1200), 
        new JellyPink(1600), new JellyGreen(2000), new JellyViolett(2400), new JellyYellow(3000)
        ],
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
        ],[
            new PoisonBottles(), new PoisonBottles(), new PoisonBottles(), new PoisonBottles(), new PoisonBottles(),
            new PoisonBottles(), new PoisonBottles(), new PoisonBottles(), new PoisonBottles(), new PoisonBottles(),
        ],
        [new Audio('audio/aqua-temple-189227.mp3'), new Audio('audio/coin-257878_RdqkEEWL.mp3'), new Audio('audio/big-bubble-2-169074.mp3'),
         new Audio('audio/male-hurt-sound-95206.mp3'), new Audio('audio/water-swimming-1-101167.mp3'), new Audio('audio/coin-upaif-14631.mp3'),
         new Audio('audio/monster-roaring-276149.mp3'), new Audio('audio/long-howl-whale-and-monster-37270.mp3'), new Audio('audio/monster-bite-44538.mp3'),
         new Audio('audio/game-level-complete-143022.mp3'), new Audio('audio/rhythmic-chase-cinematic-percussion-game-trailer-drums-music-184338.mp3'),
         new Audio('audio/you-win-sequence-1-183948.mp3'), new Audio('audio/game-over-39-199830.mp3')
        ],
        [new Wall(0), new Wall(50), new Wall(100), new Wall(150), new Wall(200),
        new Wall(250), new Wall(300), new Wall(350), new Wall(400), new Wall(450)]
        
    );
} 
