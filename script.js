console.log("we good bro")

var ctx = game.getContext('2d')
let movementDisplay = movement
var movement = 10



function Hero(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let hero = new Hero(400, 400, "blue", 10, 20)


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










//function drawRectangle(x, y) {
//    var canvas = document.getElementById("myCanvas")
//    var size = 50
//    var ctx = canvas.getContext ("2d")
//    ctx.fillStyle = 'purple'
//    ctx.strokeStyle = 'yellow'
//    ctx.lineWidth = 5
//    ctx.fillRect(x, y, size, size)
//    ctx.strokeRect(x, y, size, size)