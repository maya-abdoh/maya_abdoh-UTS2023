import React, { useState } from 'react';
import { getFamilyFeudData } from './getFamilyFeudData';

function FamilyFeudContest({ onStartClick, theme, handleThemeChange }) {
  const [data] = useState(getFamilyFeudData());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scoreTeam1, setScoreTeam1] = useState(0);
  const [scoreTeam2, setScoreTeam2] = useState(0);
  const [tempScore, setTempScore] = useState(0);
  const [levelCoefficient, setLevelCoefficient] = useState(1);

  const handleAnswerClick = (mark) => {
    setTempScore(tempScore + mark * levelCoefficient);
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
      <h1>Family Feud Contest</h1>
      <div className="question">
        <h2>Question: {currentData.question}</h2>
        <div className="answers">
          {answers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswerClick(answer.mark)}>
              {answer.answer}
            </button>
          ))}
        </div>
      </div>
      <div className="scoreboards">
        <div className="scoreboard">
          <h3>Team 1 Score: {scoreTeam1}</h3>
        </div>
        <div className="scoreboard">
          <h3>Team 2 Score: {scoreTeam2}</h3>
        </div>
      </div>
      <div className="temp-scoreboard">
        <h3>Temporary Score: {tempScore}</h3>
        <button onClick={() => handleScoreboardClick(1)}>Add to Team 1</button>
        <button onClick={() => handleScoreboardClick(-1)}>Add to Team 2</button>
      </div>
      <div className="level-coefficient">
        <h3>Level Coefficient: {levelCoefficient}</h3>
        <button onClick={handleLevelCoefficientChange}>Increase Level</button>
      </div>
      <button onClick={handleBackToStartClick}>Back to Start</button>
    </div>
  );
}

export default FamilyFeudContest;
