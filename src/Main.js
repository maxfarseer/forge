import React from 'react'
//import PropTypes from 'prop-types'

const IMGS_DATA = {
  winter:
    'https://stardewvalleywiki.com/mediawiki/images/thumb/a/ae/Feast_of_the_Winterstar.png/500px-Feast_of_the_Winterstar.png',
  spring:
    'https://stardewvalleywiki.com/mediawiki/images/thumb/2/20/Egg_Festival.png/500px-Egg_Festival.png',
  summer:
    'https://stardewvalleywiki.com/mediawiki/images/thumb/a/af/Luau.png/500px-Luau.png',
  autumn:
    'https://stardewvalleywiki.com/mediawiki/images/thumb/4/45/StardewValleyFair.png/500px-StardewValleyFair.png',
}

class Main extends React.Component {
  // какой это урл -> показывать картинку
  state = {
    season: 'winter',
    imgUrl: '', //
  }
  componentDidMount() {
    window.onhashchange = event => {
      const newSeason = event.newURL.slice(event.newURL.indexOf('#') + 1)
      this.setState(
        {
          imgUrl: '',
          season: newSeason,
        },
        () => {
          this.loadImage(this.state.season)
        }
      )
    }

    const season = window.location.hash.slice(1)
    this.setState(
      {
        season,
      },
      () => {
        this.loadImage(this.state.season)
      }
    )
  }
  loadImage = src => {
    let img = new Image()
    img.onload = () => {
      this.setState({ imgUrl: IMGS_DATA[this.state.season] })
    }

    img.src = IMGS_DATA[this.state.season]
  }
  render() {
    const { imgUrl } = this.state
    return (
      <div>
        {imgUrl.length ? <img src={imgUrl} alt="season" /> : <p>Загружаю...</p>}
      </div>
    )
  }
}

Main.propType = {}

export default Main
