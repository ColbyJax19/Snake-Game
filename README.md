

![Snake Wireframe](https://user-images.githubusercontent.com/107650551/229223419-f583e917-d4a8-4ea3-9e95-20719ccf8cc3.png)






Goal: To code the game Snake from Nokia

Step 1
    Setup all boiler plate code and connect to HTML

Step 2
    HTML:
        a. Create a game-container div 
        b. Nest x amount of divs within game-container representing the game-grid.
        c. nest divs for title and score initializing their classes to "title" and "score"

    
    CSS:
        d. Center game-container and all elements within
        e. set game grid to display:grid; and template columns to represent game grid. 

Step 3 
    JS Setup
        a. Declare the following variables:
                NOTE: Declare all these globally before step c.
            snake(arr), title(str), score(num), start btn, apple(arr?), grid(arr) 
        b.add a style to the snake array that styles the boxes the array is in to represent the snake
        c. Create an init function within which to store initial values.
        d. add a render function to the init function and set aside. 

Step 4
    JS Functions
        a. startGame Function : Appends a snake (snake class to divs) 4-6 spaces long randomly in the array and begins movement.
        b. Attach an event listener to start button with a click listener and the startGame Function as an arg.
        c. snakeMovement function : write out parameters for snake movement speed. For this I need to learn how to move through arrays
        in a timed fashion. Is this where I would put movement speed escalation? Probably
        d. generateApple Function : Randomly append an apple on one of the array blocks
        e. eatApple Function : When the snake enters the same array as the apple, push a class to the end of the snake array and delete the apple, while re-running the generateApple function. Also score++  and run speed increase function. 

Step 5
    Loss Conditions
        a. hitWall
            if snake hits wall, game ends (some styling might be cool for this part)
            OR if snake hits self, game ends.
        b. Update HTML `You hit a wall/ bit yourself! Your score is ${score}`



Tracking pivot block for snake movements
        




    What needs to happen?
        I need an init for actual gameplay initiation
        I need a function for apple eating that pushes to the end of the snake array
        I need to ++ score when an apple gets eaten
        I need to set lose parameters if snake hits it's own array or if snake hits walls. 
        I need a function to move the snake and to iterate the speed the snake moves at
    
















    
