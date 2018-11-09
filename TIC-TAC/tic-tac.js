let oscore= 0
let xscore= 0




function startGame() {
    for(var i = 1; i <= 9; i++){
        clearBox(i);
    }
    // let oscore= 0
    // let xscore= 0

    player = "X";
    playerWin = false;
    setMessage(player + "gets to start")
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function nextMove(square) {
    if (playerWin != false) {
        setMessage(player + " already won.")
    }
    else if (square.innerText == "") {


        square.innerText = player;
        switchTurn();
    }
    else {
        setMessage("pick another square.")
    }
}

function switchTurn() {
    
    if (checkForWinner(player)) {
        setMessage("CONGRATS " + player + ", you won!")
        playerWin = player;
    if(playerWin == "X"){
        xscore++
        setMessage("X won " +xscore)
    
    }
    else if(playerWin != "X"){
         oscore++
         setMessage("O won " +oscore)
     }
       
    }
    else if (player == "X") {
        player = "O";
        setMessage("It's" + player + " 's turn");
    } else {
        player = "X";
        setMessage("It's" + player + " 's turn");
    }
}

function checkForWinner(move) {
    let result = false
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        result = true
    }
    return result
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}
function clearBox(number){
    document.getElementById("s" + number).innerText = "";
}

