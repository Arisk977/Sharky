class MovableObject extends DrawableObject {
    x = 100;
    y = 320;
    width = 100;
    height = 100;
    speed = 1;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
    otherDirection = false;
    lastHit = 0;
    direction = "down";


    moveLeft() {
        this.setStoppableInterval(() => this.moveLeftInterval(), 1000/60);
    }

    moveUpAndDown() {
        if (this.direction === "down") {
            this.y += this.speed;
            if (this.y + this.height >= 480) {
                this.direction = "up";
            }
        } else if (this.direction === "up") {
            this.y -= this.speed;
            if (this.y <= 0) {
                this.direction = "down";
            }
        }
    }
    
    
    

    moveLeftInterval(){
       this.x -= this.speed;
    }

    useAnimation(ImagesArray) {
        let i = this.currentImage % ImagesArray.length; // das % fängt von neu an wenn die maximale length erreicht ist
        let path = ImagesArray[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    isColliding(obj) {
        return this.x + (this.width - this.offset.right) >= obj.x + obj.offset.left && 
             this.x + this.offset.left <= obj.x + (obj.width - obj.offset.right) &&
            this.y + (this.height - this.offset.bottom) >= obj.y + obj.offset.top &&
            this.y + this.offset.top <= obj.y + (obj.height - obj.offset.bottom)
    }

    hit(){
        this.world.level.audio[3].play();
        this.life -= 20;
        if(this.life <= 0){
            this.life = 0;
        }
        else{
            this.lastHit = new Date().getTime();
        }
    }

    collectPoison(){
        this.poison += 20;
        if(this.poison >= 100){
            this.poison = 100;
        }
    }

    isCooldown(){
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < 2;
    }

    isDead(){
        return  this.life == 0;
    }
    
}