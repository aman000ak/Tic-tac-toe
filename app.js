let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newsetbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let audioTurn = new Audio("click.mp3");
let winTurn = new Audio("congratulations.mp3");

let firstplayer=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=> {
    firstplayer=true;
    enableBox();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        audioTurn.play();

        if(firstplayer){
        box.innerText ="X";
        firstplayer=false;
      }else{
        box.innerText ="O";
        firstplayer=true;
      }
      box.disabled = true;
      checkWinner();
})
});

const disableBox =() => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox =() => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
msg.innerText = `Congrastulation, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBox();
}

const checkWinner = () => {
    for(pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                winTurn.play();
                showWinner(pos1);

            }
        }
        

    }
};
resetbtn.addEventListener("click",resetGame);
newsetbtn.addEventListener("click",resetGame);