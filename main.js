//activation of html code
var boxes = document.querySelectorAll(".box");
var ResetGame = document.querySelector("#reset-btn");
var newGamebtn = document.querySelector("#new-btn");
var msgconatiner = document.querySelector(".msg-conatainer");
var msg = document.querySelector("#msg");
//playerx,playero
var turno = true;
//2D array
var winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
// deciding player turn
var resetGame = function () {
    turno = true;
    enableBoxes();
    msgconatiner === null || msgconatiner === void 0 ? void 0 : msgconatiner.classList.add("hide");
};
//text of boxes
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        console.log("box is clicked");
        if (turno) {
            box.innerText = "o";
            turno = false;
        }
        else {
            box.innerText = "x";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
// making boxes disable after winning condition is full filled
var disableBoxes = function () {
    for (var _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
        var box = boxes_1[_i];
        box.disable = true;
    }
};
// making all buttons enable after when game is reset
var enableBoxes = function () {
    for (var _i = 0, boxes_2 = boxes; _i < boxes_2.length; _i++) {
        var box = boxes_2[_i];
        box.disable = false;
    }
    boxes.innerText = "";
};
//placing new game option in the top of game 
var showWinner = function (winner) {
    msg.innerText = "congratulation, winner is ".concat(winner);
    msgconatiner === null || msgconatiner === void 0 ? void 0 : msgconatiner.classList.remove("hide");
    disableBoxes();
};
var pattern;
var checkWinner = function () {
    for (var _i = 0, winPattern_1 = winPattern; _i < winPattern_1.length; _i++) {
        pattern = winPattern_1[_i];
        var postVal1 = boxes[pattern[0]].innerText;
        var postVal2 = boxes[pattern[1]].innerText;
        var postVal3 = boxes[pattern[2]].innerText;
        if (postVal1 != "" && postVal2 != "" && postVal3 != "") {
            if (postVal1 === postVal2 && postVal2 === postVal3) {
                console.log("winner", postVal1);
                showWinner(postVal1);
            }
        }
    }
};
newGamebtn === null || newGamebtn === void 0 ? void 0 : newGamebtn.addEventListener("click", resetGame);
ResetGame === null || ResetGame === void 0 ? void 0 : ResetGame.addEventListener("click", resetGame);
