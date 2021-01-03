console.log("we good bro")

var ctx = game.getContext('2d')
let movementDisplay = movement
var movement = 10
var image = new Image()
image.src = "https://webstockreview.net/images/archer-clipart-archery-2.png"
var image2 = new Image()
image2.src = "https://gameartpartners.com/wp-content/uploads/edd/2015/06/goblin_featured.png"
var image3 = new Image()
image3.src = "https://images.vexels.com/media/users/3/127666/isolated/preview/297c657a0a4a5093675abc9963b76711-flat-dirt-arrow-by-vexels.png"
let arrow = []

function Hero(image, x, y, width, height ) {
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

function Goblin(image, x, y, width, height) {
    this.image = image
    this.x = x
    this.y = y
    this.width = width
    this.height = height
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
    this.direction = direction
    this.update = function() {
        if (this.direction=="up"){
            arrow.src = 
            this.y-=40
        }
        if (this.direction=="down"){
            this.y+=40
        }
        if (this.direction=="left"){
            this.x-=40
        }
        if (this.direction=="right"){
            this.x+=40
        }
    }
    this.render = function() {
        
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}

function looseArrows() {
    console.log("Thup")
    arrow.push(new Arrow (image3, hero.x, hero.y, 100, 100, hero.direction))
    console.log(arrow)
}

let hero = new Hero(image, 100, 200)

let goblins = []

for (let i = 0; i<5; i++) {
    goblins.push(new Goblin(image2, Math.random()*800, Math.random()*800, 80, 80))
}
console.log(goblins)

let gameLoop = setInterval(() => {                                                                                                                                                                                                                                                                                                              
    ctx.clearRect(0, 0, game.width, game.height)
    hero.render()
    for (let i =0; i<goblins.length; i++) {
        var collide = detectHit(hero, goblins[i])
        if (collide) {
            hero.alive = false
            console.log("Ouch!")
        }
        if (goblins[i].alive) {
            goblins[i].update()
            goblins[i].render()
        }
    }   
    for (let i =0; i<arrow.length; i++) {
        arrow[i].update()
        arrow[i].render()
    }    
},100)

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

let detectHit = (collision1, collision2) => {

    if (
        collision1.x + collision1.width >= collision2.x &&
        collision1.x <= collision2.x + collision2.width &&
        collision1.y <= collision2.y + collision2.height &&
        collision1.y + collision1.height >= collision2.y
      ) {
        return true
      }
    return false 
  }
