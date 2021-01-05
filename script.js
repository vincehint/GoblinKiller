var ctx = game.getContext('2d')
let movementDisplay = movement
var movement = 10
var image = new Image()
image.src = "https://webstockreview.net/images/archer-clipart-archery-2.png"
var image2 = new Image()
image2.src = "https://gameartpartners.com/wp-content/uploads/edd/2015/06/goblin_featured.png"
var arrowUp = new Image()
arrowUp.src = "images/ArrowUp.png"
var arrowDown = new Image()
arrowDown.src = "images/ArrowDown.png"
var arrowLeft = new Image()
arrowLeft.src = "images/ArrowLeft.png"
var arrowRight = new Image()
arrowRight.src = "images/ArrowRight.png"
let arrow = []
var gameover = true



function Hero(image, x, y, width, height) {
    this.image = image
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.alive = true
    this.direction = "right"
    this.render = function() {
        ctx.drawImage(this.image, this.x, this.y, 90, 125)
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
            this.y-=1
        }
        if (hero.y>this.y){
            this.y+=1
        }
        if (hero.x<this.x){
            this.x-=1
        }
        if (hero.x>this.x){
            this.x+=1
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
            arrowUp.src = "images/ArrowUp.png"
            this.y-=40
        }
        if (this.direction=="down"){
            arrowUp.src = "images/ArrowDown.png"
            this.y+=40
        }
        if (this.direction=="left"){
            arrowUp.src = "images/ArrowLeft.png"
            this.x-=40
        }
        if (this.direction=="right"){
            arrowUp.src = "images/ArrowRight.png"
            this.x+=40
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

let hero = new Hero(image, 400, 400, 80, 125)
let goblin = new Goblin
let goblins = []

for (let i = 0; i<5; i++) {
    goblins.push(new Goblin(image2, Math.random()*800, Math.random()*800, 100, 100))
}


let gameLoop = setInterval(() => {
    ctx.clearRect(0, 0, game.width, game.height)
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
}},100)

function movementHero(e) {
switch(e.key) {
    case 'Enter':
        looseArrows()
        break
    case 'w':
        up = true 
        hero.y-=movement
        hero.direction="up"
        break
    case 'a':
        left = true
        hero.x-=movement
        hero.direction="left"
        break
    case 's':
        down = true
        hero.y+=movement
        hero.direction="down"
        break
    case 'd':
        right = true
        hero.x+=movement
        hero.direction="right"
        break
    
}
}
document.addEventListener("keydown", movementHero)

let detectHit = (hero, goblin) => {
    //console.log(hero)
    if (
        hero.x + hero.width >= goblin.x &&
        hero.x <= goblin.x + goblin.width &&
        hero.y <= goblin.y + goblin.height &&
        hero.y + hero.height >= goblin.y
      ) {
        return true
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

  