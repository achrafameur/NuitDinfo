import React from 'react'
import Board from './game/Board'
import Square from './game/Square'
import {useState, useEffect} from 'react';

import v1 from '../video/8ara9.mp4'
import v2 from '../video/rabe7.mp4'
import gif from '../images/76912-man-workout (1).gif'
import { Link } from "react-router-dom";


import {Modal} from 'react-bootstrap'

const defaultSquares = () => (new Array(9)).fill(null);

const lines = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6],
];

const TicTacToe = () => {
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    const [squares, setSquares] = useState(defaultSquares());
    const [winner,setWinner] = useState(null);

    const [test, setTest] = useState(true);

    const [v, setV] = useState('v1');
  
    useEffect(() => {
      const isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;
      const linesThatAre = (a,b,c) => {
        return lines.filter(squareIndexes => {
          const squareValues = squareIndexes.map(index => squares[index]);
          return JSON.stringify([a,b,c].sort()) === JSON.stringify(squareValues.sort());
        });
      };
      const emptyIndexes = squares
        .map((square,index) => square === null ? index : null)
        .filter(val => val !== null);
      const playerWon = linesThatAre('x', 'x', 'x').length > 0;
      const computerWon = linesThatAre('o', 'o', 'o').length > 0;

      if (playerWon) {
        setWinner('x');
        setTest(false);
        handleShow();

        setV('v1')
      }
      if (computerWon) {
        setWinner('o');
        setTest(false);
        handleShow();

        setV('v2')

        

      }
      const putComputerAt = index => {
        let newSquares = squares;
        newSquares[index] = 'o';
        setSquares([...newSquares]);
      };
      if (isComputerTurn) {
  
        const winingLines = linesThatAre('o', 'o', null);
        if (winingLines.length > 0) {
          const winIndex = winingLines[0].filter(index => squares[index] === null)[0];
          putComputerAt(winIndex);
          return;
        }
  
        const linesToBlock = linesThatAre('x', 'x', null);
        if (linesToBlock.length > 0) {
          const blockIndex = linesToBlock[0].filter(index => squares[index] === null)[0];
          putComputerAt(blockIndex);
          return;
        }
  
        const linesToContinue = linesThatAre('o', null, null);
        if (linesToContinue.length > 0) {
          putComputerAt(linesToContinue[0].filter(index => squares[index] === null)[0]);
          return;
        }
  
        const randomIndex = emptyIndexes[ Math.ceil(Math.random()*emptyIndexes.length) ];
        putComputerAt(randomIndex);
      }
    }, [squares]);
  
  
  
    function handleSquareClick(index) {
      const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
      if (isPlayerTurn && test) {
        let newSquares = squares;
        newSquares[index] = 'x';
        setSquares([...newSquares]);
      }
    }

  
    return (
      <div > 
        <div className="text-center">
            {v === 'v2' && (
              <>
              <img src={gif} style={{width:'300px'}}/>
              <p>Monsieur le sauveteur nous sommes désolés de vous informer que vous avez échoué de sauver le soldat , <br /> si vous voulez rejouez veuillez répondre a ce quiz</p>
              <Link to='/quiz' className="btn btn-primary">jouer le quiz</Link>
            </>
            )}
            
        </div>
        <main style={{paddingTop: `${v === 'v2' ? '10px' : '150px'} `}} >
            <Board>
              {squares.map((square,index) =>
                <Square
                  x={square==='x'?1:0}
                  o={square==='o'?1:0}
                  onClick={() => handleSquareClick(index)} />
              )}
            </Board>
            {/* {!!winner && winner === 'x' && (
              <div className="result green">
                Tu as gagné !
              </div>
            )}
            {!!winner && winner === 'o' && (
              <div className="result red">
                Tu as perdu !
              </div>
            )} */}
           
            
    
    <Modal
    show={show}
    onHide={handleClose}
    keyboard={false}
    size="xl"
    >
    <Modal.Header closeButton>
      <Modal.Title> {v=='v1' ? "Tu as gagné ! "  : "Tu as perdu !"  }</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <video className="h-100 w-100" autoPlay={true} loop muted>
        {v=='v1' ? <source  src={v2} type="video/mp4" /> : <source  src={v1} type="video/mp4" /> }
          <source  src={v} type="video/mp4" />
      </video>
    </Modal.Body>
  </Modal>
    </main>

  </div>
    )
}

export default TicTacToe
