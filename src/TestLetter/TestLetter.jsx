import React from 'react'
import './TestLetter.css'
const TestLetter = ({individualLetter}) => {
    const status = individualLetter.status;
    let statusClass;
    if(status === "correct"){
        statusClass = "test-letter-correct"
    }else if (status === "incorrect"){
        statusClass = "test-letter-incorrect"
    }else{
        statusClass = "test-letter-not-attempted "
    }
  return (
    <span className={`test-letter ${statusClass}`}>{individualLetter.testLetter}</span>
  )
}

export default TestLetter