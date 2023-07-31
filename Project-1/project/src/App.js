import React, { useState } from 'react';
import './PaperGroupContest.css';
function getPaperGroupData() {
  const data = {
    category1: {
      categoryTitle: 'وطنيات',
      questions: [
        {
          question: 'كم تبلغ مساحة دولة فلسطين التاريخية ؟ ',
          answer1: '21000',
          answer2: '30000',
          answer3: '29029',
          answer4: '27027',
          correctAnswer: 'answer4',
        },
        {
          question: 'ما هو الاسم الذي كان يطلق على العملة الفلسطينية القديمة ',
          answer1: 'شيكل',
          answer2: 'دينار',
          answer3: 'جنيه',
          answer4: 'ريال',
          correctAnswer: 'answer3',
        },
      ],
    },
    category2: {
      categoryTitle: 'دينيات',
      questions: [
        {
          question: 'كم عدد ركعات صلاة النصر   ',
          answer1: '2',
          answer2: '4',
          answer3: '7',
          answer4: '8',
          correctAnswer: 'answer4',
        },
        {
          question: 'كم لبث سيدنا نوح عليه السلام في قومه ؟ ',
          answer1: '309',
          answer2: '950',
          answer3: '100',
          answer4: '1000',
          correctAnswer: 'answer2',
        },
      ],
    },
    category3: {
      categoryTitle: 'معلومات عامة',
      questions: [
        {
          question: 'ماذا يحد فلسطين من الجنوب  ؟ ',
          answer1: 'النقب',
          answer2: 'مصر',
          answer3: 'السودان',
          answer4: 'البحر الأحمر',
          correctAnswer: 'answer4',
        },
        {
          question: 'ما اسم المكون الأساسي للزجاج',
          answer1: 'الحديد',
          answer2: 'الرمل',
          answer3: 'الكربون',
          answer4: 'الصدف',
          correctAnswer: 'answer2',
        },
      ],
    },
  };
  return data;
}
function PaperGroupContest() {
  const contestData = getPaperGroupData();
  const [currentCategoryKey, setCurrentCategoryKey] = useState(Object.keys(contestData)[0]);
  const categoryKeys = Object.keys(contestData);
  const category = contestData[currentCategoryKey];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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

  return (
    <div className="contest-container">
      <h2>{category.categoryTitle}</h2>
      <div>
        <p>{currentQuestion.question}</p>
        <div className="answer-grid">
          <div className="answer-row">
            <button>{currentQuestion.answer1}</button>
            <button>{currentQuestion.answer3}</button>
          </div>
          <div className="answer-row">
            <button>{currentQuestion.answer2}</button>
            <button>{currentQuestion.answer4}</button>
          </div>
        </div>
      </div>
      <div className="navigation-buttons">
        {currentQuestionIndex === 0 && currentCategoryKey !== categoryKeys[0] && (
          <button onClick={handlePreviousQuestion}>Previous Question</button>
        )}
        {!isFirstQuestion && (
          <button onClick={handlePreviousQuestion}>Previous Question</button>
        )}
        <button onClick={handleNextQuestion}>
          {isLastQuestion && currentCategoryKey !== categoryKeys[categoryKeys.length - 1]
            ? 'Next Question'
            : 'Next Question'}
        </button>
      </div>
    </div>
  );
}

export default PaperGroupContest;
