## Goblin Killer


## Basics

Can you survive?
Let's see if you're a hero, or a "chicken chaser"! (Chicken Chaser? Do you chase chickens??)
Controls: W=Up A=Left S=Down D=Right

To shoot hit Enter.
Your arrows will shoot in the last direction that you moved your character,
i/e to shoot down hit the down key and then press Enter.
Each round contains a number of Goblins, or speeds.
Kill the goblins and you win the round.
Don't let them touch you though!
Goblins have notoriosly disgusting skin and you'll get icky
...and die.

This game was created by Vincent Kofstad December of 2020 out of a state of pandemic boredom. Just kidding, it's a class project. 

Goblin Killer was written in VS Code.

You can contribute to this project using GitHub and forking and cloning the project.

## Expected MVP

- A way to win.
- A way to lose.
- Hit Detection Arrows to Goblins
- Hit Detection Goblins to Hero
- 3 rounds with varying difficulties

## Technology Used

Goblin Killer was written in VS Code using Html Css and Javascript with Canvas.

## What Needed To Happen

My original goal was to have a three round system where waves of goblins happened with various speeds and sizes and hit capacities. That did not happen, at the moment there is only one round, but it works.

To make the game function, the goblins needed to constantly follow the hero.
The arrows need to project in the direction you shoot them, and the goblins died on impact.
When a goblin collides with a hero the whole game stops and you lose.
Also, the images needed to change with the direction of the character.

## Hurdles

- Getting the images to change with direction.
    I tried so many different things to get this to work including ctx.rotate and transform. None of them worked because of the way that those do things. So instead of using an easy peasy function, we had to get a little hacky. So, now, in the movement function, each key press now registers a new image altogether. Which does not look pretty, but works.
    
- Hit Detection
    Hit detection is always challenging but even more so when you're using images but we made it happen after multiple methodology changes.
  
- Hit Detection and Image sizes
    For a while the hit detection would register when arrows or goblins were far away from their target. In this case there are two different images on top of the other. So the bottom rectangle is what the hit detection is actually looking at, and the image is just transposed over the top of it and moves with it.


## Stretch Goals

- I would definitely do my own artwork for the characters.
- Change up the styling a little more.
- Make mobile friendly
- Create a rounds function that got progressivly harder.

