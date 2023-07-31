import React from 'react';
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

  return (
    <div className="contest-container">
      {Object.keys(contestData).map((categoryKey) => {
        const category = contestData[categoryKey];
        return (
          <div key={categoryKey}>
            <h2>{category.categoryTitle}</h2>
            {category.questions.map((question, index) => (
              <div key={index}>
                <p>{question.question}</p>
                <div className="answer-grid">
                  <div className="answer-row">
                    <button>{question.answer1}</button>
                    <button>{question.answer3}</button>
                  </div>
                  <div className="answer-row">
                    <button >{question.answer2}</button>
                    <button>{question.answer4}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
export default PaperGroupContest;


