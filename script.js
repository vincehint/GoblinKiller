console.log("we good bro")

var ctx = game.getContext('2d')
let movementDisplay = movement
var movement = 10
//var image = document.getElementById("archer")
var image = new Image()
image.src = "https://webstockreview.net/images/archer-clipart-archery-2.png"
//var image2 = document.getElementById("goblin")
var image2 = new Image()
image2.src = "https://i.dlpng.com/static/png/6354616_preview.png"
//var arrow = document.getElementById("arrow")


function Hero(image, x, y, ) {
    this.image = image
    this.x = x
    this.y = y
    this.render = function() {
        ctx.drawImage(this.image, this.x, this.y, 50, 50)
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
        ctx.drawImage(this.image, this.x, this.y, 40, 40)
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
},100)

function movementHero(e) {
switch(e.key) {
    case 'w': 
        hero.y-=movement
        break
    case 'a':
        hero.x-=movement
        break
    case 's':
        hero.y+=movement
        break
    case 'd':
        hero.x+=movement
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