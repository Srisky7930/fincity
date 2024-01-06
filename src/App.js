import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/project" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
)

export default App
