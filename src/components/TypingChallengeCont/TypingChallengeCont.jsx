import React from 'react'
import './TypingChallengeCont.css'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
const TypingChallengeCont = ({selectedParagraph, timerStarted, timeRemaining, words, characters, wpm, testInfo, onInputChange}) => {
  return (
    <div className='typing-challenge-cont'>
        <div className="details-container">
            <ChallengeDetailsCard cardName="Words" cardValue={words}/>
            <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>
            <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
        </div>
        <div className="write-container">
            <TypingChallenge 
            timerStarted = {timerStarted}
            timeRemaining = {timeRemaining}
            selectedParagraph={selectedParagraph}
            testInfo = {testInfo}
            onInputChange={onInputChange}
            />
        </div>
    </div>
  )
}

export default TypingChallengeCont