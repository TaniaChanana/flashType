import React from 'react'
import './TestContainer.css'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeCont from '../TypingChallengeCont/TypingChallengeCont'

const TestContainer = ({selectedParagraph, timerStarted, timeRemaining, words, characters, wpm, testInfo, onInputChange, startAgain}) => {
  return (
    <div className='test-container'>
      {
        timeRemaining > 0 ?
          <div className="typing-challenge-cont">
            <TypingChallengeCont 
              selectedParagraph = {selectedParagraph}
              timerStarted = {timerStarted}
              timeRemaining = {timeRemaining}
              words = {words}
              characters = {characters}
              wpm = {wpm}
              testInfo = {testInfo}
              onInputChange={onInputChange}
            />
          </div>
          :
          < div className="try-again-cont">
            <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
          </div>
      }


    </div >
  )
}

export default TestContainer