let playerChoice= "O";

let gameBoard = {
  allSquares: document.querySelectorAll('.square'),
  clear: document.getElementById("clearGame"),
  tds: document.getElementsByTagName('td'),
  checkWin: () =>{
    let win =[[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];

    for (let i = 0; i < win.length; i++){
      const currentCombo = win[i];

      const firstBox = document.getElementById(currentCombo[0]).innerHTML;
      const secondBox = document.getElementById(currentCombo[1]).innerHTML;
      const thirdBox = document.getElementById(currentCombo[2]).innerHTML;

      if(firstBox=== "O" || firstBox === "X"){
        if(firstBox === secondBox && firstBox === thirdBox)
        {
          return true;
        }
      }
    }
    return false;
  }
}

gameBoard.allSquares.forEach((sq) =>{
  sq.addEventListener('click', (event) => {
    const element = event.target
    if(element.innerHTML === "X"|| element.innerHTML === "O"){
      return;
    }
    element.innerHTML = playerChoice;
    if (gameBoard.checkWin()) {
      alert('Whoever this is. You win!')
    }else{
      player.playerLetter();
    }
  })
})

let player = {
  playerLetter: () => {
    if(playerChoice === "O"){
      playerChoice = "X"
    }else{
      playerChoice = "O";
    }
  }
}

gameBoard.clear.addEventListener("click", (event)=>{
    for(let i = 0; i < gameBoard.tds.length; i++) {
        gameBoard.tds[i].innerHTML = ''
    }
})
