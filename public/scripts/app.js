
import { nByM } from "./matrixConverter.js";
import { checkMove } from "./board.js";


document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid');
    const width =8;
    const squares = []
    
    //stores the detail of the last clicked square's id
    let idOfSquare;
    //stores the detail of the last clicked square 
    let details = [];
    //actual matrix board on which calculations will be done
    //game state board matrix
    let board =[]

    let firstClickId
    let secondClickId
    for(let i=0; i<width;i++){
        board[i]= new Array(width);
    }
    
    const icons =[
        "url(images/boar.png)",
        "url(images/deer.png)",
        "url(images/dog.png)",
        "url(images/ducky.png)",
        "url(images/lion.png)",
        "url(images/owl.png)",
        "url(images/panda.png)",
        "url(images/tiger.png)",            
]
    //function to create the board
    function createBoard(){
        for(let i = 0; i<width; i++)
        {
            for(let j=0; j<width; j++){
            const square = document.createElement('div')
            let randomIcon = Math.floor(Math.random()* icons.length)
            
            
            square.setAttribute('id',i+'-'+j)
            //square.style.backgroundColor = colors[randomIcon];
            square.style.backgroundImage = icons[randomIcon];
            square.style.border = "1px solid #000";
            
            
            board[i][j]= randomIcon +1
            grid.appendChild(square)
            squares.push(square)
            }


        }


    }

    createBoard()
    //zero-padding the matrix
    let newMatrix = nByM(board);
    //console.log(newMatrix);
    

    
    squares.forEach(square=> square.addEventListener('click',returnID))

    //squares.forEach(square=> square.addEventListener('click',printID))

    squares.forEach(square => square.addEventListener('click', openThread))

    function openThread(){
        let i = details.length
        if(i%2===0){
            firstClickId = details[i-2]
            secondClickId =details[i-1]
            let [tempMatrix,output] = checkMove(newMatrix,firstClickId,secondClickId)
            
            
            
            if(output === true){
            newMatrix = tempMatrix
            let sq1 = document.getElementById(firstClickId)
            let sq2 = document.getElementById(secondClickId)
            sq1.style.backgroundImage = "url(images/checkmark.png)"
            sq2.style.backgroundImage = "url(images/checkmark.png)"
            const audfile = new Audio("audio/apple_sound.mp3")
            audfile.play()
            console.log(newMatrix)
            
            }
            if(output === false){
                const errorAudioFile = new Audio("audio/windows_error.mp3")
                errorAudioFile.play()
            }

        }
       
       
    }

    
    
    //returns the co-ordinates in terms of the padded-matrix
   /*function printID(){
        idOfSquare = this.id;
       let nw = ParseString(idOfSquare)
        console.log(nw);
        console.log("this is also working printID")
        console.log(getPositionValue(nw[0],nw[1]));
        console.log(convertToId(nw[0],nw[1]));
        

        
    }
*/   


    //returns the value from the board

    function getPositionValue(a,b){
        return newMatrix[a][b];
    }
    




    function returnID(){
        
        idOfSquare = this.id;
    
       details.push(idOfSquare)

       
       console.log(idOfSquare)
       return idOfSquare;
    }

    
    

})