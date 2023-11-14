// buttons
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");

// assigning values as per the button clicked
let index = 1;
let gameStatus = document.querySelector("#gameStatus");
function checkPlayerTurn() {
    if (index % 2 == 0) {
        gameStatus.textContent = "Player X Turn";
    } else {
        gameStatus.textContent = "Player O Turn";
    }
}

let playerWonFlag = false;
btn1.addEventListener("click", () => {
    if (!playerWonFlag) {
        btn1.style.background = "transparent";
        btn1.style.cursor = "default";
        if (btn1.textContent === "") {
            if (index % 2 == 0) {
                btn1.textContent = "X";
            } else {
                btn1.textContent = "O";
            }
            index++;
        }
    }
    checkPlayerTurn();
    display();
});
btn2.addEventListener("click", () => {
    if (!playerWonFlag) {
        btn2.style.background = "transparent";

        btn2.style.cursor = "default";
        if (btn2.textContent === "") {
            if (index % 2 == 0) {
                btn2.textContent = "X";
            } else {
                btn2.textContent = "O";
            }
            index++;
        }
    }
    checkPlayerTurn();
    display();
});
btn3.addEventListener("click", () => {
    if (!playerWonFlag) {
        btn3.style.background = "transparent";

        btn3.style.cursor = "default";
        if (btn3.textContent === "") {
            if (index % 2 == 0) {
                btn3.textContent = "X";
            } else {
                btn3.textContent = "O";
            }
            index++;
        }
    }
    checkPlayerTurn();
    display();
});
btn4.addEventListener("click", () => {
    if (!playerWonFlag) {
        btn4.style.background = "transparent";

        btn4.style.cursor = "default";
        if (btn4.textContent === "") {
            if (index % 2 == 0) {
                btn4.textContent = "X";
            } else {
                btn4.textContent = "O";
            }
            index++;
        }
    }
    checkPlayerTurn();
    display();
});
btn5.addEventListener("click", () => {
    if (!playerWonFlag) {
        btn5.style.background = "transparent";

        btn5.style.cursor = "default";
        if (btn5.textContent === "") {
            if (index % 2 == 0) {
                btn5.textContent = "X";
            } else {
                btn5.textContent = "O";
            }
            index++;
        }
    }
    checkPlayerTurn();
    display();
});
btn6.addEventListener("click", () => {
    if (!playerWonFlag) {
        btn6.style.background = "transparent";

        btn6.style.cursor = "default";
        if (btn6.textContent === "") {
            if (index % 2 == 0) {
                btn6.textContent = "X";
            } else {
                btn6.textContent = "O";
            }
            index++;
        }
    }
    checkPlayerTurn();
    display();
});
btn7.addEventListener("click", () => {
    if (!playerWonFlag) {
        btn7.style.background = "transparent";
        btn7.style.cursor = "default";
        if (btn7.textContent === "") {
            if (index % 2 == 0) {
                btn7.textContent = "X";
            } else {
                btn7.textContent = "O";
            }
            index++;
        }
    }
    checkPlayerTurn();
    display();
});
btn8.addEventListener("click", () => {
    if (!playerWonFlag) {
        btn8.style.background = "transparent";
        btn8.style.cursor = "default";
        if (btn8.textContent === "") {
            if (index % 2 == 0) {
                btn8.textContent = "X";
            } else {
                btn8.textContent = "O";
            }
            index++;
        }
    }
    checkPlayerTurn();
    display();
});
btn9.addEventListener("click", () => {
    if (!playerWonFlag) {
        btn9.style.background = "transparent";

        btn9.style.cursor = "default";
        if (btn9.textContent === "") {
            if (index % 2 == 0) {
                btn9.textContent = "X";
            } else {
                btn9.textContent = "O";
            }
            index++;
        }
    }
    checkPlayerTurn();
    display();
});

function display() {
    if (
        btn1.textContent === btn2.textContent &&
        btn2.textContent === btn3.textContent &&
        btn1.textContent !== ""
    ) {
        document.getElementById(
            "gameStatus"
        ).textContent = `Player ${btn1.textContent} WINS`;
        playerWonFlag = true;
        disableButtons();
    } else if (
        btn4.textContent === btn5.textContent &&
        btn5.textContent === btn6.textContent &&
        btn4.textContent !== ""
    ) {
        document.getElementById(
            "gameStatus"
        ).textContent = `Player ${btn4.textContent} WINS`;
        playerWonFlag = true;
        disableButtons();
    } else if (
        btn7.textContent === btn8.textContent &&
        btn8.textContent === btn9.textContent &&
        btn7.textContent !== ""
    ) {
        document.getElementById(
            "gameStatus"
        ).textContent = `Player ${btn7.textContent} WINS`;
        playerWonFlag = true;
        disableButtons();
    } else if (
        btn1.textContent === btn4.textContent &&
        btn4.textContent === btn7.textContent &&
        btn1.textContent !== ""
    ) {
        document.getElementById(
            "gameStatus"
        ).textContent = `Player ${btn1.textContent} WINS`;
        playerWonFlag = true;
        disableButtons();
    } else if (
        btn2.textContent === btn5.textContent &&
        btn5.textContent === btn8.textContent &&
        btn2.textContent !== ""
    ) {
        document.getElementById(
            "gameStatus"
        ).textContent = `Player ${btn2.textContent} WINS`;
        playerWonFlag = true;
        disableButtons();
    } else if (
        btn3.textContent === btn6.textContent &&
        btn6.textContent === btn9.textContent &&
        btn3.textContent !== ""
    ) {
        document.getElementById(
            "gameStatus"
        ).textContent = `Player ${btn3.textContent} WINS`;
        playerWonFlag = true;
        disableButtons();
    } else if (
        btn1.textContent === btn5.textContent &&
        btn5.textContent === btn9.textContent &&
        btn1.textContent !== ""
    ) {
        document.getElementById(
            "gameStatus"
        ).textContent = `Player ${btn1.textContent} WINS`;
        playerWonFlag = true;
        disableButtons();
    } else if (
        btn3.textContent === btn5.textContent &&
        btn5.textContent === btn7.textContent &&
        btn3.textContent !== ""
    ) {
        document.getElementById(
            "gameStatus"
        ).textContent = `Player ${btn3.textContent} WINS`;
        playerWonFlag = true;
        disableButtons();
    } else if (index > 9) {
        document.getElementById("gameStatus").textContent = "DRAW";
        playerWonFlag = true;
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll(".btn").forEach((element) => {
        element.style.background = "blue";
        element.style.cursor = "default";
        element.addEventListener("mouseenter", () => {
            element.style.background = "blue";
        });
        element.addEventListener("mouseleave", () => {
            element.style.background = "blue";
        });
    });
}

// header text

document.addEventListener("DOMContentLoaded", () => {
    writeText();
});

let textSpace = document.querySelector("#gameName");
let headerText = "Tic Tac Toe";
let ind = 0;

function writeText() {
    if (ind < headerText.length) {
        textSpace.textContent += headerText[ind];
        ind++;
        setTimeout(() => {
            writeText();
        }, 300);
    } else {
        removeText();
    }
}

function removeText() {
    if (ind > 0) {
        textSpace.textContent = textSpace.textContent.slice(
            0,
            textSpace.textContent.length - 1
        );
        ind--;
        setTimeout(() => {
            removeText();
        }, 300);
    } else {
        writeText();
    }
}

resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
    gameStatus.textContent = "Start Game";
    document.querySelectorAll(".btn").forEach((element) => {
        element.textContent = "";
        element.style.background = "#575379";
        // element.disabled = false;
        element.style.cursor = "pointer";
        playerWonFlag = false;
        index = 1;
        element.addEventListener("mouseenter", () => {
            hoverColor(element);
        });
        element.addEventListener("mouseleave", () => {
            transparentColor(element);
        });
    });
});

function hoverColor(element) {
    element.style.background = "rgb(179 157 212 / 36%)";
}

function transparentColor(element) {
    element.style.background = "transparent";
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn").forEach((element) => {
        element.addEventListener("mouseenter", () => {
            hoverColor(element);
        });
        element.addEventListener("mouseleave", () => {
            transparentColor(element);
        });
    });
});
