import React, { useState } from 'react';
import './PaperGroupContest.css';
import { getPaperGroupData } from './PaperGroupData';
import PaperGroupContest from './PaperGroupContest';


function App() {
  const paperGroupData = getPaperGroupData();

  return (
    <div className="App">
      <PaperGroupContest />
    </div>
  );
}

export default App;