import React, { useState, useEffect } from 'react';
import './PaperGroupContest.css';
import StartPage from '../Start/StartPage';
import getPaperGroupData from './PaperGroupData';

function PaperGroupContest({ onStartClick, theme, handleThemeChange }) {
  const contestData = getPaperGroupData();
  const [currentCategoryKey, setCurrentCategoryKey] = useState(Object.keys(contestData)[0]);
  const categoryKeys = Object.keys(contestData);
  const category = contestData[currentCategoryKey];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(-1);
  const [showLabels, setShowLabels] = useState([]);

  const revealLabels = () => {
    const labelInterval = setInterval(() => {
      setShowLabels((prevLabels) => {
        const nextIndex = prevLabels.length;
        if (nextIndex === 4) {
          clearInterval(labelInterval);
        }
        return [...prevLabels, nextIndex];
      });
    }, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < category.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setCurrentAnswerIndex(-1); // Reset currentAnswerIndex
      setShowLabels([]);
      revealLabels();
    } else {
      const currentIndex = categoryKeys.indexOf(currentCategoryKey);
      if (currentIndex < categoryKeys.length - 1) {
        setCurrentCategoryKey(categoryKeys[currentIndex + 1]);
        setCurrentQuestionIndex(0);
        setCurrentAnswerIndex(-1); // Reset currentAnswerIndex
        setShowLabels([]);
        revealLabels();
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setCurrentAnswerIndex(-1); // Reset currentAnswerIndex
      revealLabels(0);
    } else {
      const currentIndex = categoryKeys.indexOf(currentCategoryKey);
      if (currentIndex > 0) {
        setCurrentCategoryKey(categoryKeys[currentIndex - 1]);
        const prevCategory = contestData[categoryKeys[currentIndex - 1]];
        setCurrentQuestionIndex(prevCategory.questions.length - 1);
        setCurrentAnswerIndex(-1); // Reset currentAnswerIndex
        revealLabels(0);
      }
    }
  };

  const handleBackToStartClick = () => {
    onStartClick('');
  };

  const isLastQuestion = currentQuestionIndex === category.questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const currentQuestion = category.questions[currentQuestionIndex];

  useEffect(() => {
    if (showQuestions) {
      setShowLabels([]);
      revealLabels();
    }
  }, [showQuestions]);

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
      <button style={{ width: '150px', marginRight: '1000px' }} className='start' onClick={handleBackToStartClick}>الصفحة الرئيسية</button>
      <div className="contest-container">
        <div className='card questions'>
          <h2>{category.categoryTitle}</h2>
          <div>
            <p>{currentQuestion.question}</p>
            <div className="answer-grid">
              <div className="answer-row">
                {showLabels.includes(0) && <label>{currentQuestion.answer1}</label>}
                <br></br>
                {showLabels.includes(1) && <label>{currentQuestion.answer2}</label>}
              </div>
              <div className="answer-row">
                {showLabels.includes(2) && <label>{currentQuestion.answer3}</label>}
                <br></br>
                {showLabels.includes(3) && <label>{currentQuestion.answer4}</label>}
              </div>
            </div>
          </div>
          <div className="navigation-buttons">
            {!isLastQuestion && (
              <button onClick={handleNextQuestion}>
                {currentCategoryKey !== categoryKeys[categoryKeys.length - 1]
                  ? 'السؤال التالي'
                  : 'السؤال التالي'}
              </button>
            )}
            {currentQuestionIndex === 0 && currentCategoryKey !== categoryKeys[0] && (
              <button onClick={handlePreviousQuestion}>السؤال السابق</button>
            )}
            {!isFirstQuestion && (
              <button onClick={handlePreviousQuestion}>السؤال السابق</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaperGroupContest;
