import React, { Component } from 'react'
import Main from './Main'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  /* state = {
    season: 'winter',
  } */
  changeSeason = (e) => {
    /* this.setState({ 
      season: e.currentTarget.dataset.photoName,
    }) */
    const season = e.currentTarget.dataset.photoName;

    /* window.onpopstate = function (event) {
      alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
    };

    window.history.pushState({ page: 1 }, "title 1", "?page=1"); */
    //window.history.pushState('', '', season);
    window.location.hash = season
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stardew valley: времена года</h1>
        </header>
        <div className='buttons'>
          <button data-photo-name='winter' onClick={this.changeSeason}>Зима</button>
          <button data-photo-name='spring' onClick={this.changeSeason}>Весна</button>
          <button data-photo-name='summer' onClick={this.changeSeason}>Лето</button>
          <button data-photo-name='autumn' onClick={this.changeSeason}>Осень</button>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
