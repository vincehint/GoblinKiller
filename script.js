console.log("we good bro")

var ctx = game.getContext('2d')
let movementDisplay = movement
var movement = 10
//var image = document.getElementById("archer")
var image = new Image()
image.src = "https://webstockreview.net/images/archer-clipart-archery-2.png"
//var image2 = document.getElementById("goblin")
var image2 = new Image()
image2.src = "https://gameartpartners.com/wp-content/uploads/edd/2015/06/goblin_featured.png"
//var arrow = document.getElementById("arrow")
var image3 = new Image()
image3.src = "https://images.vexels.com/media/users/3/127666/isolated/preview/297c657a0a4a5093675abc9963b76711-flat-dirt-arrow-by-vexels.png"


let bullet = []

function Bullet(image, x, y, width, height, direction) {
    this.image = image
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.direction = direction
    this.render = function() {
        
        ctx.fillRect(this.image3, this.x, this.y, this.width, this.height, this.direction)
    }
}


function shootBullets() {
    console.log("Pew")
    bullet.push(new Bullet (image3, hero.x, hero.y, 5, 5, 2, 3, hero.direction))
    this.update = function() {
        if (bullet.y<this.y){
            this.y-=1
        }
        if (bullet.y>this.y){
            this.y+=1
        }
        if (bullet.x<this.x){
            this.x-=1
        }
        if (bullet.x>this.x){
            this.x+=1
        }
    }
}


function Hero(image, x, y, ) {
    this.image = image
    this.x = x
    this.y = y
    this.direction = "right"
    this.render = function() {
        ctx.drawImage(this.image, this.x, this.y, 50, 75)
    }
}


let hero = new Hero(image, 100, 200)

function Goblin(image, x, y) {
    this.image = image
    this.x = x
    this.y = y
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
        ctx.drawImage(this.image, this.x, this.y, 60, 60)
    }
}

let goblins = []

for (let i = 0; i<5; i++) {
    goblins.push(new Goblin(image2, Math.random()*800, Math.random()*800))
}
console.log(goblins)

let gameLoop = setInterval(() => {
    ctx.clearRect(0, 0, game.width, game.height)
    hero.render()
    for (let i =0; i<goblins.length; i++) {
        goblins[i].update()
        goblins[i].render()
    }
    for (let i =0; i<bullet.length; i++) {
        shootBullets[i].update()
        shootBullets[i].render()
    }
},100)

function movementHero(e) {
switch(e.key) {
    case 'Enter':
        shootBullets()
        break
    case 'w': 
        hero.y-=movement
        hero.direction="up"
        break
    case 'a':
        hero.x-=movement
        hero.direction="left"
        break
    case 's':
        hero.y+=movement
        hero.direction="down"
        break
    case 'd':
        hero.x+=movement
        hero.direction="right"
        break
    
}
}
document.addEventListener("keydown", movementHero)














//function drawRectangle(x, y) {
//    var canvas = document.getElementById("myCanvas")
//    var size = 50
//    var ctx = canvas.getContext ("2d")
//    ctx.fillStyle = 'purple'
//    ctx.strokeStyle = 'yellow'
//    ctx.lineWidth = 5
//    ctx.fillRect(x, y, size, size)
//    ctx.strokeRect(x, y, size, size)