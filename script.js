let snake = [2,1,0];
let score = document.querySelector('.score span')
let start = document.querySelector('.start')
let boxes = document.querySelectorAll('.box')
console.log(boxes)
let direction = 1
let interval = 0
let apple = 0;


start.addEventListener('click', init)

let snakeId = document.getElementById('snake')

function init(){
    boxes.forEach(function(el){
        el.classList.remove('apple', snake)
    })

    
    setInterval(() => {
    }, 500);
    moveSnake()
    randomApple()
    generateSnake()
}


//Generate Snake
function generateSnake(){
currentSnake = snake.forEach(i => boxes[i].setAttribute('class', 'snake'));

}


//Generate Random Apple
function randomApple(){
        if(!boxes[apple].classList.contains('snake')){    // the random apple array does not include class of 'snake'
            apple = Math.floor(Math.random() * boxes.length)
            boxes[apple].setAttribute('class', 'apple')
            console.log(boxes[apple])
        }
}




// function moveSnake(boxes){
//     let tail = snake.pop();
//     boxes[tail].classList.remove('snake');
//     snake.unshift(snake[0] + direction);
//     boxes[snake[0]].classList.add('snake');
// }

const tail = currentSnake.pop()
squares[tail].classList.remove('snake')
currentSnake.unshift(currentSnake[0] + direction)

function moveSnake(boxes) {

    // boxes[tail].classList.remove("snake");
    // snake.unshift(snake[0] + direction);
    // // movement ends here
    // eatApple(boxes, tail);
    // boxes[snake[0]].classList.add("snake");
  }






































//NOTES:

// // Movement Functionality
// document.addEventListener("keyup", control);

// // function responding to keyboard event
// function control(e) {
//         if (e.key !== undefined) {
//               const pressedKey = e.key;
//               switch (pressedKey) {
//                     case "ArrowLeft":
//                       moveSnake();
//                       break;
//                     case "ArrowUp":
//                       console.log("Up arrow pressed");
//                       break;
//                     case "ArrowRight":
//                       console.log("Right arrow pressed");
//                       break;
//                     case "ArrowDown":
//                       console.log("Down arrow pressed");
//                   }
//                 }
//             }
            



            
            
            
            
            
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
// let rows = Math.sqrt(boxesLen);
// let columns = Math.sqrt(boxesLen);
// console.log(rows, columns)