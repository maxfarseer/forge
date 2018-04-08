import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LinkBtn from './components/LinkBtn'
import Home from './components/Home'
import ReactModal from './components/ReactModal'
import ReactSelect from './components/ReactSelect'
import './App.css'
import CssBaseline from 'material-ui/CssBaseline'

const App = () => (
  <CssBaseline>
    <div>
      <header className="header">
        <div className="top-menu">
          <LinkBtn to="/" label={'Главная'} />
          <LinkBtn to="/react-modal" label={'React-Modal'} />
          <LinkBtn to="/react-select" label={'React-Select'} />
        </div>
      </header>

      <hr />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/react-modal" component={ReactModal} />
        <Route path="/react-select" component={ReactSelect} />
      </div>
    </div>
  </CssBaseline>
)

const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppWithRouter
