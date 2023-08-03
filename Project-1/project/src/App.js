import React, { useState } from 'react';
import './App.css';
import PaperGroupContest from './PaperGroupContest';
import WhosTheMillionerContest from './WhosTheMillionerContest';
import StartPage from './StartPage'; 

function App() {
  const [selectedContest, setSelectedContest] = useState('');
  const [theme, setTheme] = useState('firstTheme');

  const handleSelectContest = (contestType) => {
    setSelectedContest(contestType);
  };

  const handleThemeChange = () => {
    setTheme(theme === 'firstTheme' ? 'secondTheme' : 'firstTheme');
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
          onStartClick={handleSelectContest}
          showQuestions={true}
          theme={theme}
          handleThemeChange={handleThemeChange}
        />
      ) : selectedContest === 'paperGroup' ? (
        <PaperGroupContest
          onStartClick={handleSelectContest}
          theme={theme}
          handleThemeChange={handleThemeChange} 
        />
      ) : null}
    </div>
  );
}
export default App;


