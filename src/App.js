import React from 'react'
import { Route, Link } from './components/Router'
import Epic from './components/Epic'
import './App.css'

const Home = () => <h2>Home</h2>

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/epic">Эпопея</Link>
      </li>
      <li>
        <Link to="/about">О приложении</Link>
      </li>
    </ul>

    <hr />

    <Route exact path="/" component={Home} />
    <Route path="/epic" component={Epic} />
    <Route path="/about" render={() => <p>Сделано на Кузнице #2</p>} />
  </div>
)

export default App
