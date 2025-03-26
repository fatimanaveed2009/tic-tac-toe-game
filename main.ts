//activation of html code

let boxes:any= document.querySelectorAll(".box");
let ResetGame:any=document.querySelector("#reset-btn");
let newGamebtn:any=document.querySelector("#new-btn");
let msgconatiner:any=document.querySelector(".msg-conatainer");
let msg:any=document.querySelector("#msg");

//playerx,playero
let turno:boolean= true;

//2D array
const winPattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,7],
[2,4,6],
[3,4,5],
[6,7,8],
]
// deciding player turn
 const resetGame =()=>{
    turno= true;
    enableBoxes();
    msgconatiner?.classList.add("hide");
 }

 //text of boxes

boxes.forEach((box:any) =>{
    box.addEventListener("click", ()=>{
        console.log("box is clicked");
        if(turno){
            box.innerText= "o";
            turno=false;
        } else {
            box.innerText= "x";
            turno=true;
        }
        box.disabled=true;

        checkWinner();
    })
});
 // making boxes disable after winning condition is full filled
const disableBoxes=()=>{
    for( let box of boxes)
        box.disable=true;
}

// making all buttons enable after when game is reset
const enableBoxes=()=>{
    for( let box of boxes)
        box.disable=false;
        boxes.innerText="";
}
//placing new game option in the top of game 
const showWinner = (winner:any) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    msgconatiner?.classList.remove("hide");
    disableBoxes();
}

let pattern;
const checkWinner=()=>{
    for (pattern of winPattern){
        
            let postVal1 = boxes[pattern[0]].innerText;
            let postVal2= boxes [pattern[1]].innerText;
            let postVal3 =boxes [pattern[2]].innerText;

if(postVal1 !="" && postVal2 !="" && postVal3 !=""){
    if(postVal1 === postVal2 && postVal2 === postVal3){
        console.log("winner" , postVal1);

        showWinner(postVal1)
    
    }
   }
  }

};

newGamebtn?.addEventListener("click",resetGame);
ResetGame?.addEventListener("click",resetGame);