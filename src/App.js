import React from 'react'
import { Route } from './components/Router'
import LinkBtn from './components/LinkBtn'
import Home from './components/Home'
import Epic from './components/Epic'
import './App.css'
import CssBaseline from 'material-ui/CssBaseline'

const App = () => (
  <CssBaseline>
    <div>
      <header className="header">
        <div className="top-menu">
          <LinkBtn to="/" label={'Главная'} />
          <LinkBtn to="/epic" label={'Эпопея'} />
          <LinkBtn to="/about" label={'О приложении'} />
        </div>
      </header>

      <hr />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/epic" component={Epic} />
        <Route path="/about" render={() => <p>Сделано на Кузнице #2</p>} />
      </div>
    </div>
  </CssBaseline>
)

export default App
