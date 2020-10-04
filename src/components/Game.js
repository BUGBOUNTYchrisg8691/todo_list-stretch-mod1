import React, { useState } from 'react'
import { calculateWinner } from "../helper"
import Board from "./Board"

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])
    const xo = xIsNext ? "X" : "O"

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1)
        const current = historyPoint[stepNumber]
        const squares = [...current]
        // return if won or occupied
        if (winner || squares[i]) return;
        // select the square
        squares[i] = xo
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXIsNext(!xIsNext)
    }

    const renderMoves = () => {
        history.map((_step, idx) => {
            const destination = idx ? `Go to move #${idx}` : "Go to start"
            return (
                <li key={ idx }>
                    <button onClick={ () => jumpTo(idx) }>{ destination }</button> 
                </li>
            )
        })
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }

    return (
        <div>
            <h1>React Tic-Tac-Toe</h1>
            <Board squares={ history[stepNumber] } onClick={ handleClick } />
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    { renderMoves }
                </div>
                <h3>{ winner ? `Winner: ${winner}` : `Next player: ${xo}` }</h3>
            </div>
        </div>
    )
}
