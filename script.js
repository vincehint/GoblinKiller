console.log("we good bro")

var ctx = game.getContext('2d')
let movementDisplay = movement
var movement = 10
var image = document.getElementById("archer")
var image2 = document.getElementById("goblin")
ctx.drawImage(image, 10, 10,)


function Hero(image, x, y) {
    this.image = image
    this.x = x
    this.y = y
    this.render = function() {
        ctx.drawImage(this.image, this.x, this.y)
    }
}

let hero = new Hero(image, 100, 200,)

function Goblin(image2, x, y,) {
    this.image = image2
    this.x = x
    this.y = y
    this.render = function() {
        ctx.drawImage(this.image, this.x, this.y)
    }
}

let goblin = new Goblin(image2, 350, 100,)


let gameLoop = setInterval(() => {

    ctx.clearRect(0, 0, game.width, game.height)
    hero.render()
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

var arrow = document.getElementById("arrow")












//function drawRectangle(x, y) {
//    var canvas = document.getElementById("myCanvas")
//    var size = 50
//    var ctx = canvas.getContext ("2d")
//    ctx.fillStyle = 'purple'
//    ctx.strokeStyle = 'yellow'
//    ctx.lineWidth = 5
//    ctx.fillRect(x, y, size, size)
//    ctx.strokeRect(x, y, size, size)