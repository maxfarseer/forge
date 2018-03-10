import React, { Component } from 'react'
import Main from './Main'
import logo from './logo.svg'
import './App.css'

const IMGS_DATA = {
  winter: 'https://stardewvalleywiki.com/mediawiki/images/thumb/a/ae/Feast_of_the_Winterstar.png/500px-Feast_of_the_Winterstar.png',
  spring: 'https://stardewvalleywiki.com/mediawiki/images/thumb/2/20/Egg_Festival.png/500px-Egg_Festival.png',
  summer: 'https://stardewvalleywiki.com/mediawiki/images/thumb/a/af/Luau.png/500px-Luau.png',
  autumn: 'https://stardewvalleywiki.com/mediawiki/images/thumb/4/45/StardewValleyFair.png/500px-StardewValleyFair.png',
}

class App extends Component {
  state = {
    season: 'winter',
  }
  changeSeason = (e) => {
    this.setState({ 
      season: e.currentTarget.dataset.photoName,
    })
  }
  render() {
    const { season } = this.state
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
        <Main imgUrl={IMGS_DATA[season]} />
      </div>
    );
  }
}

export default App;
