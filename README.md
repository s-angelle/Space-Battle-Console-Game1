========== This is a Chrome Dev Tool Console Game ==========


=== Game Goals / Specifications ===


Build a game of battling alien spaceships using Javascript. Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers. There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

1. A game round would look like this:

You attack the first alien ship - If the ship survives, it attacks you - If you survive, you attack the ship again - If it survives, it attacks you again - Etc. - If you destroy the ship, you have the option to attack the next ship or to retreat - If you retreat, the game is over, perhaps leaving the game open for further developments or options. - You win the game if you destroy all of the aliens. - You lose the game if you are destroyed.


2. Ship Properties ===>

hull is the same as health. If hull reaches 0 or less, the ship is destroyed.

firepower is the amount of damage done to the hull of the target with a successful hit. 

** accuracy** is the chance between 0 and 1 that the ship will hit its target. 

Every time the ship will attack, calculate the chance that the damage will hit the opposing ship using Math.random()



3. The USS Schwarzenegger (player spaceship) will have the following properties:

hull - 20 firepower -5 accuracy - .7


4. The alien ships will each have the following ranged properties determined randomly:

hull - between 3 and 6 firepower - between 2 and 4 accuracy - between .6 and .8


5. Get user input via the browser.


6. The app should run in the DOM. Users should see instructions through prompts, but the values of the enemy ship should change in the DOM.


=== Stretch Goals / Improvements Needed ===


1. Add functionality to the cancel button located in the prompt.

3. Create a button to give option to restart game.

5. Keep track of points for the number of wins the player has.

7. Update function to display AlienShip currently being fought.

9. Make the players and enemies stronger after each battle.

11. Distribute medals and power ups to the player depending on points.
