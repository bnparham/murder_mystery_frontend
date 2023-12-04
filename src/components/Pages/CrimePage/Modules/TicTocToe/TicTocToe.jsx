import React, { useState, useEffect, useRef } from 'react'
import './TicTocToe.css'

import cross_icon from '../../../../../img/Assets/cross.png'
import circle_icon from '../../../../../img/Assets/circle.png'
import TicTocBoxArea from './TicTocBoxArea'
import Button from '@mui/material/Button';

export default function TicTocToe() {

  const [selectPlayer, setSelectPlayer] = useState('X')
  const [title, setTitle] = useState('')
  const [startNewGame, setStartNewGame] = useState(false)
  const [btndisable, setBtnDisable] = useState([[false,false,false],[false,false,false],[false,false,false],])

  const [board,setBoard] = useState(['','',''],['','',''],['','',''])
  const [winner, setWinner] = useState(null)
  const [terminal, setTerminal] = useState(null)
  // const reload = useRef(null)

  function extractBoard(board) {
    const mapping = {'0': null, '1': 'X', '2': 'O'};
    
    // Check if the length of the input string is divisible by 3
    if (board.length % 3 !== 0) {
      throw new Error("Input string length must be a multiple of 3.");
    }
    
    // Convert the string into a list of lists
    const result = Array.from({ length: board.length / 3 }, (_, i) => [
      mapping[board[i * 3]],
      mapping[board[i * 3 + 1]],
      mapping[board[i * 3 + 2]]
    ]);
    
    return result;
  }

  const resetGame_Handler = async () => {
    try {
      setStartNewGame(false)
      setBoard(['','',''],['','',''],['','',''])
      setWinner(null)
      setTitle('')
      setBtnDisable([[false,false,false],[false,false,false],[false,false,false],])
      setTerminal(null)
      // Process the response data as needed
    } catch (error) {
      console.error('Error:', error);
    } 
  }

  const startNewGame_Handel = async () => {
    try {
      // call start new game api
      const response = await fetch('http://127.0.0.1:8000/tictoc/startnewgame', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setStartNewGame(true)
      // Process the response data as needed
    } catch (error) {
      console.error('Error:', error);
    } 
  }


  const sendData_Handler = async (selectPlayer, action) => {
    try {  
      const data = {
        letter : selectPlayer,
        action : action
      }
      console.log(data);
      // Making a POST request to the API
      const response = await fetch('http://127.0.0.1:8000/tictoc/moveapi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // adjust content type based on your API
          // You might need to include additional headers like authorization if required
        },
        body: JSON.stringify(data),
      });
  
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('Data sent successfully');
        // You might want to handle success in some way

          const responseData = await response.json();
          console.log('Response Data:', responseData);
          setBoard(extractBoard(responseData['board']))
          setWinner(responseData['winner'])
          setTerminal(responseData['terminal'])

      } else {
        // Handle errors
        console.error('Error sending data:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };


  useEffect(
    function(){
      function updateScreen(){
        for (let row = 0; row < board.length; row++) {
          for (let col = 0; col < board.length; col++) {
            if(board[row][col] === 'O'){
              const selectBox = document.querySelector(`#box${row}${col}`)
              selectBox.innerHTML = `<img src=${circle_icon}>`
  
              setBtnDisable(prevState => {
                // Create a new array with the same structure as the previous state
                return prevState.map((rowArray, rowIndex) => {
                  // If it's the targeted row, update the value at the specified column
                  if (rowIndex === row) {
                    return rowArray.map((value, colIndex) => (colIndex === col ? true : value));
                  }
                  // If it's not the targeted row, return the original rowArray
                  return rowArray;
                });
              });
        
            }
          }
        }
        if(winner == null){
          if(terminal === true){
            setTitle('🥶بازی مساوی شد ')
          }
          else{
            setTitle('🤠 نوبت توعه')
          }
        }
        else if (winner === 'X'){
          setTitle('👻 برنده شدی ')
        }
        else if (winner === 'O'){
          setTitle('باختی!😖 دوباره تلاش کن')
        }
      }

    // Introduce a 2-second delay before running updateScreen
    const delay = 1000;
    const timeoutId = setTimeout(updateScreen, delay);

    // Clear the timeout to avoid executing updateScreen if the component unmounts before the delay
    return () => clearTimeout(timeoutId);

    },[winner, terminal, board]
  )

  const toggle = (e, row, col) => {
    if(selectPlayer === 'X'){
      e.target.innerHTML = `<img src=${cross_icon}>`;
      const action  = [row, col]
      sendData_Handler(selectPlayer,action)
      setTitle(' 🤔 کامپیوتر در حال پردازش ')
    }
  }

  return (
    <div className='container'>        
        {
          startNewGame ?
          <>
          <h1 className='title'>{title}</h1>
          <div className='board'>
            <div className="row" id='row1'>
              <TicTocBoxArea id={'00'} toggle={toggle} btndisable={btndisable}/>
              <TicTocBoxArea id={'01'} toggle={toggle} btndisable={btndisable}/>
              <TicTocBoxArea id={'02'} toggle={toggle} btndisable={btndisable}/>
            </div>
            <div className="row" id='row2'>
              <TicTocBoxArea id={'10'} toggle={toggle} btndisable={btndisable}/>
              <TicTocBoxArea id={'11'} toggle={toggle} btndisable={btndisable}/>
              <TicTocBoxArea id={'12'} toggle={toggle} btndisable={btndisable}/>
            </div>
            <div className="row" id='row3'>
              <TicTocBoxArea id={'20'} toggle={toggle} btndisable={btndisable}/>
              <TicTocBoxArea id={'21'} toggle={toggle} btndisable={btndisable}/>
              <TicTocBoxArea id={'22'} toggle={toggle} btndisable={btndisable}/>
            </div>
          </div>
          </>
          :
          <>
          <h1 className='title'>ابتدا روی شروع بازی کلیک کنید</h1>
          </>
        }
        <div style={{marginTop:'10px'}}>
        {
          startNewGame ? 
          <>        
          <Button variant="outlined" href="#outlined-buttons" sx={{margin:'1rem'}} onClick={() => {resetGame_Handler()}}>
          ریست
          </Button></>
          :
          <Button variant="outlined" href="#outlined-buttons" sx={{margin:'1rem'}} onClick={() => startNewGame_Handel()}>
          شروع بازی
          </Button> 
        }
        </div>


    </div>
  )
}


  // delete Alldata in Database
  // const handleDeleteAllData = async () => {
  //   try {
  //     const response = await fetch('http://127.0.0.1:8000/tictoc/deleteall', {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // Add any other headers if needed
  //       },
  //     });

  //     if (response.ok) {
  //       console.log('Data deleted successfully');
  //     } else {
  //       console.error('Failed to delete data:', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // const handleReload = () => {
  //   console.log('true');
  //   setReload(c => !c)
  //   startNewGame()
  //   const selectBoxes = document.querySelectorAll('.boxes').forEach(
  //     function(e){
  //       e.innerHTML = ''
  //     }
  //   )
  //   setTitle('Your Turn...'
  // }