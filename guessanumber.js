//Je récupère les min et max de la range initiale autorisée.

let numberMin = document.querySelector("#playernumber").min
let numberMax = document.querySelector("#playernumber").max

//Je demande au Joueur 1 de me founir un nombre entre 0 et 50, via une fenêtre de dialogue.   

let numberToGuessPlayerOne = -1

function askANumberToGuessToPlayerOne(){
    
    while ((numberToGuessPlayerOne < 0) || (numberToGuessPlayerOne > 50))
    {
        numberToGuessPlayerOne = prompt("Joueur 1 : Donne moi un nombre entre 0 et 50")
        while (isNaN(numberToGuessPlayerOne)){
            alert("Ce n'est pas un nombre!")
            numberToGuessPlayerOne = prompt("Joueur 1 : Donne moi un nombre entre 0 et 50")
        }  
        console.log("Nombre entré :" + numberToGuessPlayerOne)      
    }   
}

// A la validation par le bouton, la fonction buttonValidation est appelée. Elle récupère le nombre 
// proposé par le joueur 2 (avec la fonction askAnumber) et le compare au nombre entré par le joueur 1
// (avec la fonction didIwin) puis affiche le résultat (avec la fonction showResult). 

function buttonValidation(){
    askANumber()
    document.querySelector("#playernumber").value = ""
    didIWin(givenNumberByPlayerTwo, numberToGuessPlayerOne)
    showResult()   
}

// Je récupère le nombre entré par le joueur 2

let givenNumberByPlayerTwo

function askANumber(){
    givenNumberByPlayerTwo = document.querySelector("#playernumber").value;
    console.log("le nombre proposé est:" + givenNumberByPlayerTwo)
    return givenNumberByPlayerTwo;
}

//Je vérifie si le nombre du Joueur 2 est égal au nombre du Joueur 1

let result
function didIWin(givenNumberByPlayerTwo, numberToGuessPlayerOne){
    if (givenNumberByPlayerTwo === numberToGuessPlayerOne){
        result = true
    } else {
        result = false
    }
    console.log("le résultat est:" + result)
    return result
} 

//J'affiche le résultat, le nombre de tentatives, et réajuste la range affichée en fonction du résultat.

let numberOfTries = 1

function showResult(){
    
    console.log("le résultat dans la fonction est: " + result)
    if (result == true) {
        const inputbutton = document.querySelector("#button")
        const inputnumber = document.querySelector("#playernumber")
        document.querySelector("#rules").innerHTML = "BRAVO, Tu as trouvé!"
        inputnumber.style.display = "none"
        inputbutton.style.display = "none"
        return
    } else {
        numberOfTries += 1
        if ((givenNumberByPlayerTwo < numberToGuessPlayerOne) && (givenNumberByPlayerTwo >= numberMin)){
                numberMin = givenNumberByPlayerTwo
            } else if ((givenNumberByPlayerTwo < numberToGuessPlayerOne) && (givenNumberByPlayerTwo < numberMin)){
                alert("Le nombre est supérieur à " + numberMin)
            } else if ((givenNumberByPlayerTwo > numberToGuessPlayerOne) && (givenNumberByPlayerTwo <= numberMax)){
                numberMax = givenNumberByPlayerTwo
            } else {
                alert("Le nombre est inférieur à " + numberMax)
            }
            }
        document.querySelector("#rules").innerHTML = 
            "Essaie encore." + "<br>" + "Devine le nombre mystère entre " +
             numberMin + " et " + numberMax + "<br>" + "Tentative n° " + numberOfTries
        } 

// Je lance le jeu    

function startTheGame(){
    askANumberToGuessToPlayerOne()
    document.querySelector("#rules").innerHTML = "Devine le nombre mystère entre " + numberMin + " et " + numberMax
}

// J'appelle la fonction pour lancer le jeu

startTheGame()






