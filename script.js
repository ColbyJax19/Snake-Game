let currentSnake = [53,52,51];
let scoreHeader = document.querySelector('.score span')
let start = document.querySelector('.start')
let boxes = document.querySelectorAll('.box')
let snakeId = document.getElementById('snake')
let score = 0;
let direction = 1
let rowLength = Math.sqrt(boxes.length);
let interval;
let intervalSpeed;;
let speedUp = .9;
let apple = 0;
let tail;
let sound = document.getElementById('audio')
let bell = document.getElementById('start-bell')
let bite = document.getElementById('bite')
let death = document.getElementById('death')
let scoreDisplay = document.getElementById('score-display')



function init(){
    //Clear Board on init to enable game restarting
    currentSnake.forEach(index => boxes[index].classList.remove('snake'))
    boxes[apple].classList.remove('apple')
    clearInterval(interval)
    intervalSpeed = 1000;
    interval = setInterval(moveSnake, intervalSpeed)
    randomApple()
    hideFinalScore()
    bell.play()
    }
    
    
 //Generate Snake
function generateSnake(){
    currentSnake = currentSnake.forEach(i => boxes[i].setAttribute('class', 'snake'));
}
    
    
 //Generate Random Apple
function randomApple(){
        let randApple = Math.floor(Math.random() * boxes.length)
        while(currentSnake.includes(randApple)){
           randApple = Math.floor(Math.random() * boxes.length)
        }
        apple = randApple;
        boxes[apple].classList.add('apple')
        console.log(boxes[apple])
    }
    
function toggleScoreDisplay() {
        if(scoreDisplay.style.display == 'block')
            scoreDisplay.style.display = 'none';
        else
            score.style.display = 'block';
        } 

function moveSnake() {
        //wall variables
        const topWall = currentSnake[0] < rowLength;
        const bottomWall = currentSnake[0] >= (rowLength * (rowLength - 1));
        const rightWall = currentSnake[0] % rowLength === rowLength - 1;
        const leftWall = currentSnake[0] % rowLength === 0;
        //hit params
        if (
        (direction === -rowLength && topWall) || // hitting the top wall
        (direction === rowLength && bottomWall) || // hitting the bottom wall
        (direction === 1 && rightWall) || // hitting the right wall
        (direction === -1 && leftWall) || // hitting the left wall
        boxes[currentSnake[0] + direction].classList.contains('snake')
    ) {
        showFinalScore()
        death.play()
        return clearInterval(interval);
    }
        const tail = currentSnake.pop()
        boxes[tail].classList.remove('snake')
        currentSnake.unshift(currentSnake[0] + direction)
        boxes[currentSnake[0]].classList.add('snake')
        
        
        //Apple Eating
        if(boxes[currentSnake[0]].classList.contains('apple')){
            // debugger
            //remove classlist of apple
            boxes[currentSnake[0]].classList.remove('apple');
            //add class of snake to end of currentsnake
            boxes[tail].classList.add('snake');
            //push to end of snake
            currentSnake.push(tail)
            //Add score
            score++
            scoreHeader.textContent = score;
            //generate new apple
            randomApple()
            clearInterval(interval)
            //Speed up snake
            intervalSpeed = intervalSpeed * speedUp
            interval = setInterval(moveSnake, intervalSpeed)
            bite.play()
        }
    }
    
    
    
    // function responding to keyboard event
    function control(e) {
        // boxes[currentSnake].classList.remove('snake')
        if (e.key !== undefined) {
            const pressedKey = e.key;
            switch (pressedKey) {
                case "ArrowLeft":
                case 'a':
                    if(direction !== 1){
                    direction = -1
                    sound.play();
                    }
                    break;
                case "ArrowUp":
                case 'w':                      
                    if(direction !== rowLength){
                    direction = -rowLength
                    sound.play();
                    }
                break;
                case "ArrowRight":
                case 'd':
                    if(direction !== -1){
                        direction = +1
                        sound.play();
                    }
                break;
                case "ArrowDown":
                case 's':
                    if(direction !== -rowLength){
                        direction = +rowLength
                        sound.play();
                    }
                    break;
                            }
                        }
                    }
                    
function hideFinalScore(){
    scoreDisplay.hidden = true;
}
 
function showFinalScore(){
    scoreDisplay.textContent = (`Game over! Your score is ${score}`)
    scoreDisplay.style.color = 'red'
    scoreDisplay.hidden = false;
}
                    
                    
                    // Movement Functionality
                    document.addEventListener("keyup", control);
                    //Start Game
                    start.addEventListener('click', init)
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                
                
                
                
                
                
                
                
                




                
                //NOTES:

                


                
            
            
            
            
            
            //Highlights even and odd indices in grid
            // function startSnake(){
                //     for(let i=0; i<boxes.length; i++){
                    //         if(i % 2 == true){
                        //             boxes[i].style.backgroundColor = "salmon"
                        //         }
                        //         for(let j=0; j<boxes.length; j++){
                            //             if(i%2 == false){
                                //                 boxes[i].style.backgroundColor = "aqua"
                                //             }
                                //         }
                                //     }
                                // }
                                // startSnake()
                                //
                                
                                
                                
                            
                                

//Sqrt of grid size
// let columns = Math.sqrt(boxesLen);
// console.log(rows)