import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import CounterButton from './CounterButton';
import './App.css'; 
const App = () => {
  return (
    <div className="container">
      <div className="header">Error Boundary Sample  </div>

      <div className="scenario">
        <ErrorBoundary>
        <p>These two Counters are inside  the same error boundary. If one crashes, the error boundary will replace both of them.</p>
          <CounterButton />
          <CounterButton />
        </ErrorBoundary>
      </div>

      <div className="scenario">
     <p> These two Counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>        <ErrorBoundary>
          <CounterButton />
        </ErrorBoundary>
        <ErrorBoundary>
          <CounterButton />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;

