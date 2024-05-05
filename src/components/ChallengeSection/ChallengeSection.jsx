import React from 'react'
import './ChallengeSection.css'
import TestContainer from '../TestContainer/TestContainer'

const ChallengeSection = ({selectedParagraph, timerStarted, timeRemaining, words, characters, wpm, testInfo, onInputChange, startAgain}) => {
  
  return (
    <div className='challenge-section-container'>
        <h1 className="challenge-section-header">
            Take a speed test
        </h1>
        <TestContainer 
          selectedParagraph = {selectedParagraph}
          timerStarted = {timerStarted}
          timeRemaining = {timeRemaining}
          words = {words}
          characters = {characters}
          wpm = {wpm}
          testInfo={testInfo}
          onInputChange={onInputChange}
          startAgain={startAgain}
        />
    </div>
  )
}

export default ChallengeSection