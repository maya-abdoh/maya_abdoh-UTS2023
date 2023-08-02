import React, { useState } from 'react';
import './PaperGroupContest.css';
import getPaperGroupData from './PaperGroupData';
import PaperGroupContest from './PaperGroupContest';
import WhosTheMillionerContest from './WhosTheMillionerContest';

function App() {
  // You can call the getPaperGroupData function here if needed
  const paperGroupData = getPaperGroupData();

  return (
    <div className="App">
      <WhosTheMillionerContest />
    </div>
  );
}

export default App;