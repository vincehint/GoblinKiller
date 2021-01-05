var ctx = game.getContext('2d')
let movementDisplay = movement
var movement = 10
var bowRight = new Image()
bowRight.src = "images/bowright.png"
var bowLeft = new Image()
bowLeft.src = "images/bowleft.png"
var bowUp = new Image()
bowUp.src = "images/bowup.png"
var bowDown = new Image()
bowDown.src = "images/bowdown.png"
//image.src = "https://webstockreview.net/images/archer-clipart-archery-2.png"
var image2 = new Image()
image2.src = "https://gameartpartners.com/wp-content/uploads/edd/2015/06/goblin_featured.png"
var arrowUp = new Image()
arrowUp.src = "images/arrowu.png"
var arrowDown = new Image()
arrowDown.src = "images/arrowd.png"
var arrowLeft = new Image()
arrowLeft.src = "images/arrowl.png"
var arrowRight = new Image()
arrowRight.src = "images/arrowr.png"
let arrow = []
var gameover = true



function Hero(image, x, y, width, height, direction) {
    this.image = image
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.alive = true
    this.direction = direction
    this.update = function() {
        if (this.direction=="up"){
            image = bowUp
            //this.y-=2
        }
        if (this.direction=="down"){
            image = bowDown
            //this.y+=2
        }
        if (this.direction=="left"){
            image = bowLeft
            //this.x-=2
        }
        if (this.direction=="right"){
            image = bowRight
            //this.x+=2
        }
    }
    this.render = function() {
        //ctx.fillStyle = "red"
        //ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x, this.y, 80, 100)
    }
}

function Goblin(image, x, y, gwidth, gheight) {
    this.image = image
    this.x = x
    this.y = y
    this.width = gwidth
    this.height = gheight
    this.alive = true
    this.update = function() {
        if (hero.y<this.y){
            this.y-=.25
        }
        if (hero.y>this.y){
            this.y+=.25
        }
        if (hero.x<this.x){
            this.x-=.25
        }
        if (hero.x>this.x){
            this.x+=.25
        }
    }
    this.render = function() {
        
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    
    }
}

function Arrow(image, x, y, width, height, direction) {
    this.image = image
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.alive = true
    this.direction = direction
    this.update = function() {
        if (this.direction=="up"){
            arrowUp.src = "images/arrowu.png"
            this.y-=10
        }
        if (this.direction=="down"){
            arrowUp.src = "images/arrowd.png"
            this.y+=10
        }
        if (this.direction=="left"){
            arrowUp.src = "images/arrowl.png"
            this.x-=10
        }
        if (this.direction=="right"){
            arrowUp.src = "images/arrowr.png"
            this.x+=10
        }
    }
    this.render = function() {  
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}



function looseArrows() {
    //console.log("Thup")
    arrow.push(new Arrow (arrowUp, hero.x, hero.y, 40, 40, hero.direction))
    //console.log(arrow)
}

let hero = new Hero(bowRight, 400, 400, 40, 40)
//let goblin = new Goblin()
let goblins = []

for (let i = 0; i<10; i++) {
    goblins.push(new Goblin(image2, Math.random()*800, Math.random()*800, 80, 80))
}


let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    if (gameover == false) {
        hero.update()
        hero.render()
        for (let i =0; i<goblins.length; i++) {
            var collide = detectHit(hero, goblins[i])
            if (collide) {
                hero.alive = false
            }
            if (goblins[i].alive) {
                goblins[i].update()
                goblins[i].render()
            }   
           for (let l =0; l<arrow.length; l++) {
                arrow[l].update()
                arrow[l].render()
                var shot = detectHit2(arrow[l], goblins[i])
                if (shot) {
                   
                   console.log(arrow[l].x, (arrow[l].x + arrow[l].width), arrow[l].y, (arrow[l].y + arrow[l].height))
                   console.log(goblins[i].x, (goblins[i].x + goblins[i].width), goblins[i].y, (goblins[i].y + goblins[i].height))
                   goblins[i] = false
                }
            }    
        }

    }
    window.requestAnimationFrame(gameLoop)
}

function movementHero(e) {
switch(e.key) {
    case 'Enter':
        looseArrows()
        break
    case 'w':
        up = true 
        hero.y-=movement
        hero.direction="up"
        hero.image = bowUp
        break
    case 'a':
        left = true
        hero.x-=movement
        hero.direction="left"
        hero.image = bowLeft
        break
    case 's':
        down = true
        hero.y+=movement
        hero.direction="down"
        hero.image = bowDown
        break
    case 'd':
        right = true
        hero.x+=movement
        hero.direction="right"
        hero.image = bowRight
        break
    
}
}

let detectHit = (hero, goblin) => {
    //console.log(hero)
    if (
        hero.x + 20 + hero.width - 20 >= goblin.x &&
        hero.x + 20 <= goblin.x + goblin.width &&
        hero.y + 20 <= goblin.y + goblin.height &&
        hero.y + 20 + hero.height - 20 >= goblin.y
      ) {
        gameover = true
        
      }
    return false 
  }

  let detectHit2 = (arrow, goblin) => {
    //console.log(arrow)
    //console.log(goblin)
    if (
        goblin.x <= arrow.x + arrow.width &&
        arrow.x <= goblin.x + goblin.width &&
        goblin.y <= arrow.y + arrow.height &&
        arrow.y <= goblin.y + goblin.height
      ) {
        //console.log("ha!")
        return true
      }
    return false 
  }

document.addEventListener("DOMContentLoaded", function(){
    document.addEventListener("click", function() {
        gameover = false;
    });
    document.addEventListener("keydown", movementHero);
    gameLoop();
});