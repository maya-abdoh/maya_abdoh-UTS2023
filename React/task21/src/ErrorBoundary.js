import React, { Component } from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>Details</p>
          <div  className="error-message">
            {this.state.error && <div>{this.state.error.toString()}</div>}
          </div>
          <div className="error-stack">
            {this.state.errorInfo && <div>{this.state.errorInfo.componentStack}</div>}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;






