import React, { useState } from 'react';
import './PaperGroupContest.css';
import StartPage from './StartPage';
import getPaperGroupData from './PaperGroupData';

function PaperGroupContest({ onStartClick, theme, handleThemeChange }) {
  const contestData = getPaperGroupData();
  const [currentCategoryKey, setCurrentCategoryKey] = useState(Object.keys(contestData)[0]);
  const categoryKeys = Object.keys(contestData);
  const category = contestData[currentCategoryKey];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(-1);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < category.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      const currentIndex = categoryKeys.indexOf(currentCategoryKey);
      if (currentIndex < categoryKeys.length - 1) {
        setCurrentCategoryKey(categoryKeys[currentIndex + 1]);
        setCurrentQuestionIndex(0);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else {
      const currentIndex = categoryKeys.indexOf(currentCategoryKey);
      if (currentIndex > 0) {
        setCurrentCategoryKey(categoryKeys[currentIndex - 1]);
        const prevCategory = contestData[categoryKeys[currentIndex - 1]];
        setCurrentQuestionIndex(prevCategory.questions.length - 1);
      }
    }
  };

  const isLastQuestion = currentQuestionIndex === category.questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const currentQuestion = category.questions[currentQuestionIndex];

  if (!showQuestions) {
    return (
      <div>
        <StartPage onStartClick={() => setShowQuestions(true)} theme={theme} onThemeChange={handleThemeChange} />
      </div>
    );
  }
  return (
    <div className={`PaperGroupContest ${theme}`}>
      <StartPage theme={theme} onThemeChange={handleThemeChange} />
      <div className="contest-container">
        <div className='card questions'>
          <h2>{category.categoryTitle}</h2>
          <div>
            <p>{currentQuestion.question}</p>
            <div className="answer-grid">
              <div className="answer-row">
                <label>{currentQuestion.answer1}</label><br></br>
                <label>{currentQuestion.answer3}</label>
              </div>
              <div className="answer-row">
                <label>{currentQuestion.answer2}</label><br></br>
                <label>{currentQuestion.answer4}</label>
              </div>
            </div>
          </div>
          <div className="navigation-buttons">
            <button onClick={handleNextQuestion}>
              {isLastQuestion && currentCategoryKey !== categoryKeys[categoryKeys.length - 1]
                ? 'Next Question'
                : 'Next Question'}
            </button>
            {currentQuestionIndex === 0 && currentCategoryKey !== categoryKeys[0] && (
              <button onClick={handlePreviousQuestion}>Previous Question</button>
            )}
            {!isFirstQuestion && (
              <button onClick={handlePreviousQuestion}>Previous Question</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaperGroupContest;
