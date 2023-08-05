import React, { useState } from 'react';
import './WhosTheMillionerContest.css';
import StartPage from './StartPage';
import WhosTheMillionerData from './WhosTheMillionerData';

export default function WhosTheMillionerContest({ onStartClick, showQuestions, theme, handleThemeChange }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const data = WhosTheMillionerData();
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(data.length).fill(null));
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  if (!showQuestions) {
    return (
      <div>
        <StartPage onStartClick={() => onStartClick('whosTheMillioner')} theme={theme} onThemeChange={handleThemeChange} />
      </div>
    );
  }
  
  const handleAnswer = (selectedAnswer) => {
    if (isAnswered) {
      return; 
    }

    const correctAnswer = data[currentQuestion].correctAnswer;
    const isCorrect = selectedAnswer === correctAnswer;

    setSelectedAnswers((prevSelectedAnswers) => {
      const newSelectedAnswers = [...prevSelectedAnswers];
      newSelectedAnswers[currentQuestion] = selectedAnswer;
      return newSelectedAnswers;
    });

    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setIsAnswered(true);

    setTimeout(() => {
      if (currentQuestion < data.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setIsAnswered(false);
        setIsAnswerCorrect(false);
      }
    }, 2000);
  };

  return (
    <div className='questions card'>
      <h5>Current Score: {score}</h5>
      <QuestionCard
        question={data[currentQuestion].question}
        answers={[
          data[currentQuestion].answer1,
          data[currentQuestion].answer2,
          data[currentQuestion].answer3,
          data[currentQuestion].answer4,
        ]}
        correctAnswer={data[currentQuestion].correctAnswer}
        handleAnswer={handleAnswer}
        isAnswered={isAnswered}
        selectedAnswer={selectedAnswers[currentQuestion]}
        isAnswerCorrect={isAnswerCorrect}
      />
    </div>
  );
}

function QuestionCard({ question, answers, correctAnswer, handleAnswer, isAnswered, selectedAnswer, isAnswerCorrect }) {
  return (
    <div>
      <h5>{question}</h5>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {answers.map((answer, index) => {
          const isCorrect = `answer${index + 1}` === correctAnswer;
          const isSelected = `answer${index + 1}` === selectedAnswer;
          const buttonStyle = {
            backgroundColor: isSelected
              ? isCorrect
                ? 'green'
                : 'red'
              : 'white',
          };
          return (
            <div key={index} className='answerButtons' style={{ flexBasis: '50%', padding: '20px' }}>
              <button
                style={isAnswered && isCorrect ? { backgroundColor: 'green' } : buttonStyle}
                onClick={() => handleAnswer(`answer${index + 1}`)}
                disabled={isAnswered}
              >
                {answer}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
