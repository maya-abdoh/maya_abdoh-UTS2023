import React, { useState } from 'react';
import WhosTheMillionerData from './WhosTheMillionerData'; // Adjust the import path based on the location of your file
import './WhosTheMillionerContest.css'

export default function WhosTheMillionerContest() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const data = WhosTheMillionerData(); // Now the data is imported correctly
    const [isAnswered, setIsAnswered] = useState(false); // To track if the user has answered the current question
  
    const handleAnswer = (selectedAnswer) => {
      if (isAnswered) {
        return; // Do nothing if the question is already answered
      }
  
      setIsAnswered(true); // Mark the question as answered
  
      setTimeout(() => {
        if (currentQuestion < data.length - 1) {
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
          setIsAnswered(false); // Reset the isAnswered state for the next question
        } }, 2000); 
    };
  
    return (
      <div className='questions card'> 
        <QuestionCard
          question={data[currentQuestion].question}
          answers={[
            data[currentQuestion].answer1,
            data[currentQuestion].answer2, 
            data[currentQuestion].answer3,
            data[currentQuestion].answer4,
          ]}
          correctAnswer={data[currentQuestion].correctAnswer} // Pass the correct answer to the QuestionCard component
          handleAnswer={handleAnswer}
          isAnswered={isAnswered} // Pass the isAnswered state to the QuestionCard component
        />
      </div>
    );
  }

  function QuestionCard({ question, answers, correctAnswer, handleAnswer, isAnswered }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedAnswer(`answer${index + 1}`);
    handleAnswer(`answer${index + 1}`);
  };

  return (
    <div>
      <h4>{question}</h4>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {answers.map((answer, index) => {
          const isCorrect = `answer${index + 1}` === correctAnswer;
          const isSelected = `answer${index + 1}` === selectedAnswer;
          const buttonStyle = {
            backgroundColor: isSelected ? (isCorrect ? 'green' : 'red') : 'white',
    
          };
          return (
            <div key={index} className='answerButtons' style={{ flexBasis: '50%', padding: '20px' }}>
              <button 
                style={buttonStyle}
                onClick={() => handleButtonClick(index)}
                disabled={isAnswered} // Disable button if the question is already answered
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
