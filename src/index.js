import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class AppTitle extends React.Component {
  render(){
    return(
      <div className="main-title">
        <h1>React Dungeon Crawler</h1>
        <h3>Kill the boss in dungeon 5</h3>
      </div>
    )
  }
}

class StatusBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="status-bar">
        <li><span className="bold">Health: </span>{this.props.health}</li>
        <li><span className="bold">Weapon: </span>{this.props.weapon}</li>
        <li><span className="bold">Atack: </span>{this.props.atack}</li>
        <li><span className="bold">Level: </span>{this.props.level}</li>
        <li><span className="bold">Next Level: </span>{this.props.next}</li>
        <li><span className="bold">Dungeon: </span>{this.props.dungeon}</li>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      health: 100,
      weapon: "stick",
      atack: 14,
      level: 0,
      nextLevel: 50,
      dungeon: 1
    }
  }
  render() {
    return (
      <div className="App">
        <AppTitle />
        <StatusBar
          health={this.state.health}
          weapon={this.state.weapon}
          atack={this.state.atack}
          level={this.state.level}
          next={this.state.next}
          dungeon={this.state.dungeon}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));