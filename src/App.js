import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hola mundo!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));