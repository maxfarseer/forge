import React from 'react'
import BookInfo from './BookInfo'
import { httpGet } from '../helpers/network'

class Book extends React.Component {
  state = {
    data: [],
    isLoading: false,
  }
  componentDidMount() {
    const epicName = this.props.match.path.split('/')[2]
    this.setState({ isLoading: true })

    httpGet(epicName).then(json =>
      this.setState({ data: json.books, isLoading: false })
    )
  }

  renderTemplate = () => {
    const { isLoading, data } = this.state

    if (isLoading) {
      return <p>Загружаю...</p>
    } else {
      return data.map((item, index) => {
        return <BookInfo key={index} data={item} />
      })
    }
  }

  render() {
    return <div>{this.renderTemplate()}</div>
  }
}

export default Book
