randomDice = [
    'dice1.png',
    'dice2.png',
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png'
]



const winner = () => {
    randomIndex = Math.floor(Math.random() * randomDice.length)
    randomIndex2 = Math.floor(Math.random() * randomDice.length)
    res = document.querySelector('h1#res')

    selectedDice1 = randomDice[randomIndex]
    selectedDice2 = randomDice[randomIndex2]

    document.querySelector('img#leftdice').src = `./images/${selectedDice1}`
    document.querySelector('img#rightdice').src = `./images/${selectedDice2}`

    
    if (randomIndex > randomIndex2) {
        res.innerHTML = `Player 1 Wins!`
    } else if (randomIndex < randomIndex2) {
        res.innerHTML = `Player 2 Wins!`
    } else {
        res.innerHTML = `Draw!`
    }
    
}