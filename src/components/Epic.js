import React from 'react'
import { Route, Link } from './Router'
import Book from './Book'

class Epic extends React.Component {
  render() {
    const { match } = this.props
    return (
      <div>
        <h3>Выберите серию:</h3>
        <p>
          <Link to={`${match.path}/potter`}>Гарри Поттер</Link>
        </p>
        <p>
          <Link to={`${match.path}/lord`}>Властелин колец</Link>
        </p>
        <p>
          <Link to={`${match.path}/hannibal`}>Ганнибал</Link>
        </p>

        <hr />

        <Route path={`${match.path}/potter`} component={Book} />
        <Route path={`${match.path}/lord`} component={Book} />
        <Route path={`${match.path}/hannibal`} component={Book} />
      </div>
    )
  }
}

export default Epic
