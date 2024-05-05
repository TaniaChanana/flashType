import React from 'react'
import './TryAgain.css'
const TryAgain = ({words, characters, wpm, startAgain}) => {
  return (
    <div className='try-again-container'>
        <h1>
            Test Results
        </h1>
        <div className='result-container'>
            <p>
                <b>Characters : </b>{characters}
            </p>
            <p>
                <b>Words : </b>{words}
            </p>
            <p>
                <b>wpm : </b>{wpm}
            </p>
        </div>

        <div>
            <button className='end-buttons start-again-btn' onClick={() => startAgain()}>Re-try</button>
            <button className='end-buttons share-btn' onClick={() => {
                window.open("https://www.facebook.com/sharer/sharer.php?u=tania.chanana.1")
            }}>Share</button>
        </div>
    </div>
  )
}

export default TryAgain