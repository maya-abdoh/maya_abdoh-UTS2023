import React, { useState } from 'react';
import { getFamilyFeudData } from './getFamilyFeudData';
import './FamilyFeudContest.css';

function FamilyFeudContest({ onStartClick, theme, handleThemeChange }) {
  const [data] = useState(getFamilyFeudData());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scoreTeam1, setScoreTeam1] = useState(0);
  const [scoreTeam2, setScoreTeam2] = useState(0);
  const [tempScore, setTempScore] = useState(0);
  const [levelCoefficient, setLevelCoefficient] = useState(1);
  const [clickedButtonIndexes, setClickedButtonIndexes] = useState([]);

  const handleAnswerClick = (mark, buttonIndex) => {
    if (clickedButtonIndexes.includes(buttonIndex)) {
      return;
    }

    let newTempScore = tempScore;
    if (clickedButtonIndexes.length > 0) {
      newTempScore -= clickedButtonIndexes.reduce(
        (totalMark, index) => totalMark + answers[index].mark * levelCoefficient,
        0
      );
    }

    if (!clickedButtonIndexes.includes(buttonIndex)) {
      newTempScore += mark * levelCoefficient;
    }

    setClickedButtonIndexes([...clickedButtonIndexes, buttonIndex]);
    setTempScore(newTempScore);
  };

  const handleTeam1ScoreClick = () => {
    setScoreTeam1(scoreTeam1 + tempScore);
    setTempScore(0);
  };

  const handleTeam2ScoreClick = () => {
    setScoreTeam2(scoreTeam2 + tempScore);
    setTempScore(0);
  };

  const handleScoreboardClick = () => {
    setCurrentQuestion(currentQuestion + 1);
    setClickedButtonIndexes([]);
  };

  const handleLevelCoefficientAdd = () => {
    setLevelCoefficient(levelCoefficient + 1);
  };
  const handleLevelCoefficientMinus = () => {
    setLevelCoefficient(levelCoefficient - 1);
  };


  const handleBackToStartClick = () => {
    onStartClick('');
  };

  const currentData = data[currentQuestion];
  const answers = [
    currentData.answer1,
    currentData.answer2,
    currentData.answer3,
    currentData.answer4,
    currentData.answer5,
    currentData.answer6,
    currentData.answer7,
    currentData.answer8,
  ];

  return (
    <div className={`familyFeudContest ${theme}`}>
      <button style={{ width: '150px', marginRight: '1000px' }} className='start' onClick={handleBackToStartClick}>الصفحة الرئيسية</button>
      
      <div className='questions card familyFued'>
        <div className='header'>
      <button className='score team1' onClick={handleTeam1ScoreClick}>نقاط الفريق 1: {scoreTeam1}</button>
        <h4>Family Feud Contest</h4>
      <button className='score team2' onClick={handleTeam2ScoreClick}>نقاط الفريق 2: {scoreTeam2}</button>
      </div>
        <div className="question">
          <h5>{currentData.question}</h5>
          <div className="answers-grid">
            {Array.from({ length: 4 }).map((_, rowIndex) => (
              <div key={rowIndex}>
                {Array.from({ length: 2 }).map((_, colIndex) => {
                  const answerIndex = rowIndex * 2 + colIndex;
                  const answer = answers[answerIndex];
                  return (
                    <div key={answerIndex}>
                      <button
                        className={`start answer-button ${clickedButtonIndexes.includes(answerIndex) ? 'clicked' : ''}`}
                        onClick={() => handleAnswerClick(answer.mark, answerIndex)}
                      >
                        {answer.answer}
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <h5><button onClick={handleLevelCoefficientMinus}>-</button>  Level Coefficient: {levelCoefficient}  <button onClick={handleLevelCoefficientAdd}>+</button></h5>
        <button className='next-question' onClick={handleScoreboardClick}>Next Question</button>
      </div>
      <div className="temp-scoreboard">
        <h5>Temporary Score: {tempScore}</h5>
      </div>
      </div>
  );
}

export default FamilyFeudContest;
