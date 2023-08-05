import React, { useState } from 'react';
import './App.css';
import PaperGroupContest from './PaperGroupContest';
import WhosTheMillionerContest from './WhosTheMillionerContest';
import StartPage from './StartPage';
import FamilyFeudContest from './FamilyFeudContest';

function App() {
  const [selectedContest, setSelectedContest] = useState('');
  const [theme, setTheme] = useState('firstTheme');

  const handleSelectContest = (contestType) => {
    setSelectedContest(contestType);
  };

  const handleThemeChange = () => {
    setTheme(theme === 'firstTheme' ? 'secondTheme' : 'firstTheme');
  };

  const handleBackToStartClick = () => {
    setSelectedContest('');
  };

  return (
    <div className={`App ${theme}`}>
      {selectedContest === '' ? (
        <StartPage
          onStartClick={handleSelectContest}
          theme={theme}
          onThemeChange={handleThemeChange}
        />
      ) : selectedContest === 'whosTheMillioner' ? (
        <WhosTheMillionerContest
          onStartClick={handleBackToStartClick}
          showQuestions={true}
          theme={theme}
          handleThemeChange={handleThemeChange}
        />
      ) : selectedContest === 'paperGroup' ? (
        <PaperGroupContest
          onStartClick={handleBackToStartClick}
          theme={theme}
          handleThemeChange={handleThemeChange} 
        />
      ) : selectedContest === 'familyFeud' ? (
        <FamilyFeudContest
          onStartClick={handleBackToStartClick}
          theme={theme}
          handleThemeChange={handleThemeChange} 
        />
      ) : null}
    </div>
  );
}

export default App;
