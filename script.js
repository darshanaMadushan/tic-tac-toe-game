const gameBoard = document.getElementById("game-board");
const firstSquare = document.getElementById("first");
const secondSquare = document.getElementById("second");
const thirdSquare = document.getElementById("third");
const fourthSquare = document.getElementById("fourth");
const fifthSquare = document.getElementById("fifth");
const sixthSquare = document.getElementById("sixth");
const seventhSquare = document.getElementById("seventh");
const eighthSquare = document.getElementById("eighth");
const ninthSquare = document.getElementById("ninth");


firstSquare.addEventListener("click", getCorrectMark);
secondSquare.addEventListener("click", getCorrectMark);
thirdSquare.addEventListener("click", getCorrectMark);
fourthSquare.addEventListener("click", getCorrectMark);
fifthSquare.addEventListener("click", getCorrectMark);
sixthSquare.addEventListener("click", getCorrectMark);
seventhSquare.addEventListener("click", getCorrectMark);
eighthSquare.addEventListener("click", getCorrectMark);
ninthSquare.addEventListener("click", getCorrectMark);

// gameBoard.addEventListener("click", );
gameBoard.addEventListener("click", matchSelections);

let count = 1;

function getCorrectMark() {
    if (count % 2 === 1) {
        this.value = "X";
        this.style.color = "red";
        count += 1;
        // console.log(e.srcElement)
    } else {
        this.value = "O";
        this.style.color = "black";
        count += 1;
    }
}

function matchSelections() {
    let first = firstSquare.value;
    let second = secondSquare.value;
    let third = thirdSquare.value;
    let fourth = fourthSquare.value;
    let fifth = fifthSquare.value;
    let sixth = sixthSquare.value;
    let seventh = seventhSquare.value;
    let eighth = eighthSquare.value;
    let ninth = ninthSquare.value;
    if (first !== "") {
        if (second === first && second === third) {
            messageRefresh(second);
        } else if (fifth === first && ninth === fifth) {
            messageRefresh(fifth);
        } else if (fourth === first && seventh === fourth) {
            messageRefresh(fourth);
        }
    }
    if (second !== "") {
        if (second === fifth && eighth === fifth) {
            messageRefresh(fifth);
        }
    }
    if (third !== "") {
        if (sixth === third && ninth === sixth) {
            messageRefresh(sixth);
        }
    }
    if (fourth !== "") {
        if (fifth === fourth && sixth === fifth) {
            messageRefresh(fifth);
        }
    }
    if (seventh !== "") {
        if (seventh === fifth && fifth === third) {
            messageRefresh(fifth);
        } else if (eighth === seventh && ninth === eighth) {
            messageRefresh(eighth);
        }
    }
    if (first !== "" && second !== "" && third !== "" && fourth !== "" && fifth !== "" && sixth !== "" && seventh !== "" && eighth !== "" && ninth !== "") {
        alert("Oops! cats' game!!")
        location.reload();
    }
}

const messageRefresh = (value) => {
    alert("Player " + value + " has won.");
    location.reload();
}

const clickButtonReset = () => {
    if (confirm("Do you want to start a new game?")) {
        location.reload();
    } else {
        document.getElementById("cancel").innerText = "Continue the match!"
    }
};