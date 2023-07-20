import React, { useState } from 'react';
import NameFormUncontrolled from './NameForm-Uncontrolled';
import NameFormControlled from './Controlled';

const App = () => {
  const [submissionCount, setSubmissionCount] = useState(0);

  const handleFormSubmit = () => {
    setSubmissionCount(submissionCount + 1);
  };

  return (
    <div>
      {submissionCount === 0 ? (
        <NameFormUncontrolled onSubmit={handleFormSubmit} />
      ) : (
        <NameFormControlled />
      )}
    </div>
  );
};

export default App;











