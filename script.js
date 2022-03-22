let randomVariable1 = Math.floor(Math.random() * 6) + 1;
let randomVariable2 = Math.floor(Math.random() * 6) + 1;


function rollDice() {

    // if player 1 wins
    if (randomVariable1 > randomVariable2)
        document.querySelector("h1").innerText = "🚩 Player 1 Wins!";

    // if player 2 wins
    else if (randomVariable1 < randomVariable2)
        document.querySelector("h1").innerText = "Player 2 Wins! 🚩";

    // both draw
    else
        document.querySelector("h1").innerText = "Draw!";


    let imageChange1 = document.getElementsByClassName("img1")[0];
    let imageChange2 = document.getElementsByClassName("img2")[0];

    switch (randomVariable1) {
        case 1:
            imageChange1.setAttribute("src", "images/dice1.png");

            break;
        case 2:
            imageChange1.setAttribute("src", "images/dice2.png");

            break;
        case 3:
            imageChange1.setAttribute("src", "images/dice3.png");

            break;
        case 4:
            imageChange1.setAttribute("src", "images/dice4.png");

            break;
        case 5:
            imageChange1.setAttribute("src", "images/dice5.png");

            break;
        case 6:
            imageChange1.setAttribute("src", "images/dice6.png");

            break;

        default:
            break;
    }


    switch (randomVariable2) {
        case 1:
            imageChange2.setAttribute("src", "images/dice1.png");

            break;
        case 2:
            imageChange2.setAttribute("src", "images/dice2.png");

            break;
        case 3:
            imageChange2.setAttribute("src", "images/dice3.png");

            break;
        case 4:
            imageChange2.setAttribute("src", "images/dice4.png");

            break;
        case 5:
            imageChange2.setAttribute("src", "images/dice5.png");

            break;
        case 6:
            imageChange2.setAttribute("src", "images/dice6.png");

            break;

        default:
            break;
    }

}

