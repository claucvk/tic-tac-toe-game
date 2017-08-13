Tic Tac Toe Game: http://ccvk.me/tic-tac-toe-game/

I followed the next steps to build this game:

1) I develop some users stories to understand the game requirements.
User Stories:
- As a player I want to sign up/ sign in to play the game.
- As a player I want to choose to be player 1 (X) or player 2 (O) to start play the game.
- As a player I want to put my marker in the game board square that I chose.
- As a player I want to win if I have three markers in a row (horizontal, vertical or diagonal) confirmed by a notification message.
- As a player I want to see the score game and the number of ties.
- As a player I want to see the total games I won and lost.
- As a player I want to change my password.
- As a player I want to log out to the game.

2) I sketched out a wireframe with two different screens:
Links to wireframes
- Initial screen: http://i.imgur.com/eiIVBlN.jpg
- Screen after sign in: http://i.imgur.com/D7kJfjq.jpg

3) Based on the previous planning documentation I did the follow a game logic pseudocode. I pasted it in my main JS file to guide the construction of my code.
- Who's the turn?
  PlayerX OR PlayerO
- Place marker
- Switch player
- Repeat steps 2 and 3 until having a winner or a tie.
- Check 3 markers in a row VERTICAL --> display the winning player --> ++winning -   player --> display player counter.
- Check 3 markers in a row HORIZONTAL --> display the winning player --> ++winning player --> display player counter.
- Check 3 markers in a row DOWN DIAGONAL --> display the winning player --> ++winning player --> display player counter.
- Check 3 markers in a row UP DIAGONAL --> display the winning player --> ++winning player --> display player counter.
- ! 3 in a row --> ++Tie Counter --> display tie counter.
- If one of 5, 6, 7, 8 or 9 steps/conditions is met --> stop game --> restart game.

4) I tried to write a modular code. Every function I created I tested separately and at the end I articulated between them to make the game work.


Technologies used:
- Vanilla JavaScript
- jQuery
- HTML
- SCSS / CSS
- Bootstrap
- Git

Unsolved problems:
- Improve the look of the User Interface.
- Stop clicks after having a winner.
- Make work the "play game" button.
