const playingGridDiv = document.querySelector('#playing_grid');
const playerToMoveH2 = document.querySelector('#player_to_move > h2');
const totalNumberOfMovesH2 = document.querySelector('#total_number_of_moves > h2');
const header = document.querySelector('header');
let fiveInARow = false;
let playerWhoHasWon = '';
let playerOneHasRingsOrXs = '';

const playingGridArray = [];
const arrayOfDivs = [];

let sideLengthOfPlayingGrid = prompt("Hur många rutor brett och högt vill du att spelbrädet ska vara?")

let activePlayer = 'Spelare 1'
let numberOfMovesMade = 0

const h2WithInfoAboutWhichPlayerHasRings = document.createElement('h2');
header.appendChild(h2WithInfoAboutWhichPlayerHasRings);

function toggleActivePlayer(){

        if(activePlayer === 'Spelare 1'){
            activePlayer = 'Spelare 2';
        }
        else if(activePlayer === 'Spelare 2'){
            activePlayer = 'Spelare 1';
    }
}

function createRandomNumberZeroOrOne(){
    let randomNumberRaw = Math.random();
    let randomNumberZeroOrOne;

    if(randomNumberRaw < 0.5){
        randomNumberZeroOrOne = 0;
    }
    else{
        randomNumberZeroOrOne = 1;
    }
    return randomNumberZeroOrOne;
}

function decideWhichPlayerHasRingsOrXsRespectively(zeroOrOne){
    playerOneHasRingsOrXs;
    
    if(randomNumberZeroOrOne === 0){
        playerOneHasRingsOrXs = 'rings';
    }
    else if(randomNumberZeroOrOne === 1){
        playerOneHasRingsOrXs = 'xs';
    }

    return playerOneHasRingsOrXs;
}

function displayWhichPlayerHasRingsOrXsRespectively(playerOnesMarkType){
    if(playerOneHasRingsOrXs === 'rings'){
        h2WithInfoAboutWhichPlayerHasRings.textContent = 'Spelare 1 har slumpats till att spela med ringar och spelare 2 med kryss.';
    }
    else if(playerOneHasRingsOrXs === 'xs'){
        h2WithInfoAboutWhichPlayerHasRings.textContent = 'Spelare 1 har slumpats till att spela med kryss och spelare 2 med ringar.';
    }
}

randomNumberZeroOrOne = createRandomNumberZeroOrOne();
playerOneHasRingsOrXs = decideWhichPlayerHasRingsOrXsRespectively(randomNumberZeroOrOne);
displayWhichPlayerHasRingsOrXsRespectively(playerOneHasRingsOrXs);

function activePlayerDisplay(){
playerToMoveH2.textContent = `${activePlayer}'s tur!`;
}

function totalNumberOfMovesCount(){
    numberOfMovesMade += 1;
}

function totalNumberOfMovesDisplay(){
    totalNumberOfMovesH2.textContent = `Totalt antal drag gjorda: ${numberOfMovesMade}`;
}



function decideIf5InARowHor(row, col) {

    let loopStart = col - 4;

    if (loopStart < 0){
        loopStart = 0
    }

    let loopEnd = col + 4;

    if (loopEnd > sideLengthOfPlayingGrid - 1){
        loopEnd = sideLengthOfPlayingGrid - 1
    }

    let checkedString = ""

    for(let i = loopStart; i <= loopEnd; i++){

        checkedString = checkedString + playingGridArray[row][i].textContent;

        if(checkedString.includes('OOOOO')){

            fiveInARow = true;

            if(playerOneHasRingsOrXs === 'rings'){
                playerWhoHasWon = 'Spelare 1';
            }
            else if(playerOneHasRingsOrXs === 'xs'){
                playerWhoHasWon = 'Spelare 2';
            }

            playerToMoveH2.textContent = `${playerWhoHasWon} har vunnit denna omgång!`;
        }

        else if(checkedString.includes('XXXXX')){

            fiveInARow = true;
    
            if(playerOneHasRingsOrXs === 'xs'){
                playerWhoHasWon = 'Spelare 1';
            }
            else if(playerOneHasRingsOrXs === 'rings'){
                playerWhoHasWon = 'Spelare 2';
            }

            playerToMoveH2.textContent = `${playerWhoHasWon} har vunnit denna omgång!`;  
        }
        //console.log(checkedString)
        //console.log(checkedString.includes("OOOOO"))
    }
}

function decideIf5InARowVert(col, row){

    let loopStart = row - 4;

    if (loopStart < 0){
        loopStart = 0
    }

    let loopEnd = row + 4;

    if (loopEnd > sideLengthOfPlayingGrid - 1){
        loopEnd = sideLengthOfPlayingGrid - 1
    }

    let checkedString = ""

    for(let i = loopStart; i <= loopEnd; i++){

        checkedString = checkedString + playingGridArray[i][col].textContent;

        if(checkedString.includes('OOOOO')){

            fiveInARow = true;

            if(playerOneHasRingsOrXs === 'rings'){
                playerWhoHasWon = 'Spelare 1';
            }
            else if(playerOneHasRingsOrXs === 'xs'){
                playerWhoHasWon = 'Spelare 2';
            }

            playerToMoveH2.textContent = `${playerWhoHasWon} har vunnit denna omgång!`;
        }

        else if(checkedString.includes('XXXXX')){

            fiveInARow = true;
    
            if(playerOneHasRingsOrXs === 'xs'){
                playerWhoHasWon = 'Spelare 1';
            }
            else if(playerOneHasRingsOrXs === 'rings'){
                playerWhoHasWon = 'Spelare 2';
            }

            playerToMoveH2.textContent = `${playerWhoHasWon} har vunnit denna omgång!`;  
        }
        //console.log(checkedString)
        //console.log(checkedString.includes("OOOOO"))
    }
}

function decideIf5InARowDiagUp(col, row) {

    let loopStartRow = row + 4;
    let loopStartCol = col -4;

    if (loopStartRow > (sideLengthOfPlayingGrid - 1) || loopStartCol < 0){
        if (-(loopStartRow - (sideLengthOfPlayingGrid - 1)) === loopStartCol) {
            loopStartCol = 0;
            loopStartRow = (sideLengthOfPlayingGrid - 1);
        }
        if (-(loopStartRow - (sideLengthOfPlayingGrid - 1)) > loopStartCol) {
            loopStartCol = 0;
            loopStartRow = (-(loopStartRow - (sideLengthOfPlayingGrid - 1)) - loopStartCol);
        }
        if (-(loopStartRow - (sideLengthOfPlayingGrid - 1)) < loopStartCol) {
            loopStartRow = 0;
            loopStartCol = loopStartCol - (-(loopStartRow - (sideLengthOfPlayingGrid - 1)));
        }
    }


    let loopEndRow = row - 4;
    let loopEndCol = col + 4;

    if (loopEndRow < 0 || loopStartCol > (sideLengthOfPlayingGrid - 1)) {
        if (-(loopEndRow - (sideLengthOfPlayingGrid - 1)) === loopEndCol) {
            loopEndCol = (sideLengthOfPlayingGrid - 1);
            loopEndRow = 0;

        }
        if (loopEndRow > (-(loopEndCol - (sideLengthOfPlayingGrid - 1)))) {
            loopEndCol = (sideLengthOfPlayingGrid - 1);
            loopEndRow = loopEndRow - (-(loopEndCol - (sideLengthOfPlayingGrid - 1)));
        }
        if (loopEndRow < (-(loopEndCol - (sideLengthOfPlayingGrid - 1)))) {
            loopEndRow = 0;
            loopEndCol = loopEndCol - (-(loopStartRow - (sideLengthOfPlayingGrid - 1)));
        }
    }
   

    let checkedString = ""

    for (let i = loopStartCol, j = loopStartRow; i <= loopEndCol, j <= loopEndRow; i++, j--){

        checkedString = checkedString + playingGridArray[i][j].textContent;
        //console.log(checkedString);

        if(checkedString.includes('OOOOO')){

            fiveInARow = true;

            if(playerOneHasRingsOrXs === 'rings'){
                playerWhoHasWon = 'Spelare 1';
            }
            else if(playerOneHasRingsOrXs === 'xs'){
                playerWhoHasWon = 'Spelare 2';
            }

            playerToMoveH2.textContent = `${playerWhoHasWon} har vunnit denna omgång!`;
        }

        else if(checkedString.includes('XXXXX')){

            fiveInARow = true;
    
            if(playerOneHasRingsOrXs === 'xs'){
                playerWhoHasWon = 'Spelare 1';
            }
            else if(playerOneHasRingsOrXs === 'rings'){
                playerWhoHasWon = 'Spelare 2';
            }

            playerToMoveH2.textContent = `${playerWhoHasWon} har vunnit denna omgång!`;  
        }
        //console.log(checkedString)
        //console.log(checkedString.includes("OOOOO"))
    }
}


function decideIf5InARowDiagDown(col, row) {

    let loopStartRow = row -4;
    let loopStartCol = col -4;

    if (loopStartRow < 0 || loopStartCol < 0){
        if (loopStartRow === loopStartCol) {
            loopStartRow = 0;
            loopStartCol = 0;
        }
        if (loopStartRow > loopStartCol) {
            loopStartCol = 0;
            loopStartRow = row - col;
        }
        if (loopStartRow < loopStartCol) {
            loopStartRow = 0;
            loopStartCol = col - row;
        }
    }


    let loopEndRow = row + 4;
    let loopEndCol = col + 4;

    if (loopEndRow > (sideLengthOfPlayingGrid - 1) || loopEndCol > (sideLengthOfPlayingGrid - 1)) {
        if (loopEndRow === loopEndCol) {
            loopEndRow = (sideLengthOfPlayingGrid - 1);
            loopEndCol = (sideLengthOfPlayingGrid - 1);
        }
        if (loopEndRow > loopEndCol) {
            loopEndRow = (sideLengthOfPlayingGrid - 1);
            loopEndCol = (sideLengthOfPlayingGrid - 1) - (row - col);
        }
        if (loopEndRow < loopEndCol) {
            loopEndCol = (sideLengthOfPlayingGrid - 1);
            loopEndRow = (sideLengthOfPlayingGrid - 1) - (col - row);
        }
    }

    let checkedString = ""

    for (let i = loopStartCol, j = loopStartRow; i <= loopEndCol, j <= loopEndRow; i++, j++){

        checkedString = checkedString + playingGridArray[i][j].textContent;
        //console.log(checkedString);

        if(checkedString.includes('OOOOO')){

            fiveInARow = true;

            if(playerOneHasRingsOrXs === 'rings'){
                playerWhoHasWon = 'Spelare 1';
            }
            else if(playerOneHasRingsOrXs === 'xs'){
                playerWhoHasWon = 'Spelare 2';
            }

            playerToMoveH2.textContent = `${playerWhoHasWon} har vunnit denna omgång!`;
        }

        else if(checkedString.includes('XXXXX')){

            fiveInARow = true;
    
            if(playerOneHasRingsOrXs === 'xs'){
                playerWhoHasWon = 'Spelare 1';
            }
            else if(playerOneHasRingsOrXs === 'rings'){
                playerWhoHasWon = 'Spelare 2';
            }

            playerToMoveH2.textContent = `${playerWhoHasWon} har vunnit denna omgång!`;  
        }
        //console.log(checkedString)
        //console.log(checkedString.includes("OOOOO"))
    }
}

for(let rowNr = 0; rowNr < sideLengthOfPlayingGrid; rowNr++){
    playingGridArray[rowNr] = []

    for(let columnNr = 0; columnNr < sideLengthOfPlayingGrid; columnNr++){

        if(columnNr % sideLengthOfPlayingGrid === 0){
            arrayOfDivs[rowNr] = document.createElement('div');
            playingGridDiv.appendChild(arrayOfDivs[rowNr]);
        }
       
        playingGridArray[rowNr][columnNr] = document.createElement('button');
        playingGridArray[rowNr][columnNr].id = columnNr + ' ' + rowNr;

        playingGridArray[rowNr][columnNr].addEventListener('click', function(event){

            if(fiveInARow === false){

                if(!(event.currentTarget.classList.contains('clicked'))){

                    event.currentTarget.classList.add('clicked');

                    if(activePlayer === 'Spelare 1'){
                        event.currentTarget.classList.add('clicked_by_player_1');

                        if(playerOneHasRingsOrXs === 'rings'){
                            event.currentTarget.textContent = 'O';
                        }
                        else if(playerOneHasRingsOrXs === 'xs'){
                            event.currentTarget.textContent = 'X';
                        }
                    }

                    else if(activePlayer === 'Spelare 2'){
                        event.currentTarget.classList.add('clicked_by_player_2');
                    
                        if(playerOneHasRingsOrXs === 'rings'){
                            event.currentTarget.textContent = 'X';
                        }

                        else if(playerOneHasRingsOrXs === 'xs'){
                            event.currentTarget.textContent = 'O';
                        }
                    }
                }

                toggleActivePlayer();
                totalNumberOfMovesCount();
                totalNumberOfMovesDisplay();
                activePlayerDisplay();
                decideIf5InARowHor(rowNr, columnNr);
                decideIf5InARowVert(columnNr, rowNr);
                decideIf5InARowDiagDown(columnNr, rowNr);

                    //console.log(rowNr)
                    //console.log(columnNr)
                    //console.log(playerOneHasRingsOrXs)
                    //console.log(playerWhoHasWon)
                    
            }
        })  

        arrayOfDivs[rowNr].appendChild(playingGridArray[rowNr][columnNr]);
        playingGridArray[rowNr][columnNr].textContent = " ";

    }
    //console.log(checkedString)
    //console.log(fiveInARow)
    //console.log(playerOneHasRingsOrXs)
    
}