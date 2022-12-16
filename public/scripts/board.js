import { ParseString } from "./stringParser.js"
//receives two sets of co-ordinates

function checkBoard(matrix,cd1,cd2){
    let i1 = cd1[0]
    let j1 = cd1[1]
    let i2 = cd2[0]
    let j2 =  cd2[1]
    let decisionForZeroes = false
   if(i1 === i2 || j1===j2){
    if((i1===i2 && j1 === j2+1) ||(i1===i2 && j2 === j1+1)){
        decisionForZeroes = true
        
    }
    else if ((j1===j2 && i1===i2+1) || (j1===j2 && i2===i1+1)) {
        decisionForZeroes = true
        
    }
    else if(i1===i2){
        console.log('this works i1===i2')
         for(let i = j1+1; i<j2-1; i++){
            console.log(matrix[i1][i])
            if(matrix[i1][i]!=0){
                console.log("the value that messed it up")
                console.log(matrix[i1][i])

                decisionForZeroes = false
               
            }
            else{
                decisionForZeroes=true
            }
         }
    }
    else if(j1===j2){
        console.log('this works j1===j2')
         for(let i = i1+1; i<i2-1;i++){
            console.log(matrix[i][j1])
            if(matrix[i][j1]!=0){
                console.log(matrix[i][j1])
                decisionForZeroes = false
                
            }
            else{
                decisionForZeroes=true
            }
         }
    }
    else{
        decisionForZeroes = false
    }    
   }
   else{
    decisionForZeroes = false
   }
    
return decisionForZeroes
               
}


function checkMove(matrix,firstId,secondId){
    let fs = ParseString(firstId)
    let ss = ParseString(secondId)
    
    let decision = false
    if(firstId!== secondId){
        

        if(checkBoard(matrix,fs,ss)=== true){
       if(matrix[fs[0]][fs[1]]===matrix[ss[0]][ss[1]]){
        decision =true
        matrix[fs[0]][fs[1]]= 0
        matrix[ss[0]][ss[1]]= 0
        
       }
    }
        
    }
    
    return [matrix,decision]
}


function InvalidMove(){

}
export {checkBoard,checkMove}