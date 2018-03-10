import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  state = {
    isLoading: false,
  }
  componentDidMount() {
    this.loadImage(this.props.imgUrl)
  }
  componentWillReceiveProps(nextProps) {
    this.loadImage(nextProps.imgUrl)
  }
  loadImage = (src) => {
    this.setState({ isLoading: true })
    
    let img = new Image()
    img.onload = () => {
      this.setState({ isLoading: false })
    }

    img.src = src
  }
  render() {
    const { imgUrl } = this.props
    const { isLoading } = this.state
    return (
      <div>
        {
          isLoading ?
          <p>Загружаю...</p> :
          <img src={imgUrl} alt='season' />
        }
      </div>
    )
  }
}

Main.propType = {
  imgUrl: PropTypes.string.isRequired,
}

export default Main