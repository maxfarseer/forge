import React, { Component } from 'react'
import Main from './Main'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  componentDidMount () {
    if (!window.location.hash) {
      window.location.hash = 'winter'
    }
  }
  
  changeSeason = (e) => {
    const season = e.currentTarget.dataset.photoName;
    window.location.hash = season
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stardew valley: сезоны + hash роутер</h1>
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
