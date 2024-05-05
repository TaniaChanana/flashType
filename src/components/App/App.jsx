import React, { useState, useEffect } from 'react';
import "./App.css";
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import {SAMPLE_PARAGRAPHS} from '../../data/sampleParagraphs';

const totalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9"
const App = () => {
  const [selectedParagraph, setSelectedParagraph] = useState("");
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTmeRemaining] = useState(totalTime);
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [testInfo, setTestInfo] = useState([]);

  const fetchNewParagraphFallback = () => {
    const data = SAMPLE_PARAGRAPHS[
      Math.floor(Math.random()*SAMPLE_PARAGRAPHS.length)
    ];
      setSelectedParagraph(data);
        console.log("data is : ", data)
        const selectedParArray = data.split("");
        const testInfo = selectedParArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted"
          };
        })
        setTimerStarted(false);
        setTestInfo(testInfo);
        setCharacters(0);
        setTmeRemaining(totalTime);
        setWords(0);
        setWpm(0);

  }

  const fetchNewParagraph = () => {
    fetch(serviceUrl)
      .then((response) => response.text())
      .then((data) => {
        setSelectedParagraph(data);
        console.log("data is : ", data)
        const selectedParArray = data.split("");
        const testInfo = selectedParArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted"
          };
        })
        setTimerStarted(false);
        setTestInfo(testInfo);
        setCharacters(0);
        setTmeRemaining(totalTime);
        setWords(0);
        setWpm(0);
        
      })
  }

  console.log("timer ",timerStarted, characters);

  useEffect(() => {
    console.log("hello ", timerStarted);
  }, [timerStarted])
  

  useEffect(() => {
    fetchNewParagraphFallback();
  }, [])

  const startAgain = () => {
    fetchNewParagraphFallback();
  }

  useEffect(() => {
    const timeSpent = totalTime - timeRemaining;
    const speed = timeSpent > 0 ? (words / timeSpent) * totalTime : 0;
    setWpm(parseInt(speed));
  }, [words])

  useEffect(() => {
    if(timerStarted) {
    const intervalId = setInterval(() => {
      setTmeRemaining((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }
  }, [timerStarted]);


  const handleInputChange = (input) => {

    console.log("calles");
    if (!timerStarted) {
      setTimerStarted(true);
    }

    const characterss = input.length;
    const wordss = input.split(' ').length;
    const index = characterss - 1;

    if (index < 0) {
      const object = { testLetter: testInfo[0].testLetter, status: "notAttempted" }
      setTestInfo([object, ...testInfo.slice(1)]);
      setCharacters(characterss);
      setWords(wordss);
      return;
    }

    if (index >= selectedParagraph.length) {
      setCharacters(characterss);
      setWords(wordss);
      return;
    }

    console.log("words : ", words);
    const testInfoo = testInfo;
    if (!(index === selectedParagraph.length - 1))
      testInfoo[index + 1].status = "notAttempted";

    const isCorrect = input[index] === testInfoo[index].testLetter;

    testInfoo[index].status = isCorrect ? "correct" : "incorrect";

    setTestInfo(testInfoo);
    setCharacters(characterss);
    setWords(wordss);


  }
  return (

    <div className='app'>
      {/* Nav section */}
      <Nav />
      {/* landing page */}
      <Landing />
      {/* challenge */}
      <ChallengeSection
        selectedParagraph={selectedParagraph}
        timerStarted={timerStarted}
        timeRemaining={timeRemaining}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange={handleInputChange}
        startAgain={startAgain}
      />
      {/* footer */}
      <Footer />
    </div>
  );

}

export default App