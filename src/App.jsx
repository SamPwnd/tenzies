import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import './app.scss'

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rolls, setRolls] = React.useState(1)
    const [best, setBest] = React.useState(JSON.parse(localStorage.getItem('best')) || 0)
    const [highlightBest, setHighlightBest] = React.useState(false);

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        
        if (allHeld && allSameValue) {
            setTenzies(true)
            if(rolls < best || best === 0) {
                localStorage.setItem('best', rolls);
                setBest(rolls);
                setHighlightBest(true);
                setTimeout(() => {
                    setHighlightBest(false);
                }, 3000);
            }
        }
    }, [dice])

    
    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if(!tenzies) {
            setRolls(rolls+1)
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? die :  generateNewDie()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setRolls(1)
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <>
        {tenzies && <Confetti />}
        <main>
            <h1 className="title">Tenzies!</h1>
            <p className="instructions">Roll until all dice are the same.<br></br>
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <div className="records">
                <p className="rolls-counter">Rolls: {rolls}</p>
                <p style={highlightBest ? {color: '#575aff'} : {color: 'inherit'}}>Best: {best}</p>
            </div>
            
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
        </>
    )
}