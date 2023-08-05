import React, { useState } from 'react';import { getFamilyFeudData } from './getFamilyFeudData';
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

  const handleScoreboardClick = (scoreToAdd) => {
    if (scoreToAdd > 0) {
      setScoreTeam1(scoreTeam1 + tempScore);
    } else if (scoreToAdd < 0) {
      setScoreTeam2(scoreTeam2 + tempScore);
    }
    setTempScore(0);
    setLevelCoefficient(1);
    setCurrentQuestion(currentQuestion + 1);
    setClickedButtonIndexes([]);
  };

  const handleLevelCoefficientChange = () => {
    setLevelCoefficient(levelCoefficient + 1);
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
      <div className='questions card'>
        <h4>Family Feud Contest</h4>
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
      </div>
      <div className="scoreboards">
        <div className="scoreboard">
          <h5>Team 1 Score: {scoreTeam1}</h5>
        </div>
        <div className="scoreboard">
          <h5>Team 2 Score: {scoreTeam2}</h5>
        </div>
      </div>
      <div className="temp-scoreboard">
        <h5>Temporary Score: {tempScore}</h5>
        <button onClick={() => handleScoreboardClick(1)}>Add to Team 1</button>
        <button onClick={() => handleScoreboardClick(-1)}>Add to Team 2</button>
      </div>
      <div className="level-coefficient">
        <h5>Level Coefficient: {levelCoefficient}</h5>
        <button onClick={handleLevelCoefficientChange}>Increase Level</button>
      </div>
    </div>
  );
}

export default FamilyFeudContest;