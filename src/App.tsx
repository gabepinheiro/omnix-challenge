import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Header } from 'layout/Header'

import { Home } from 'pages/Home'
import { Offers } from 'pages/Offers'

function App () {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/ofertas' component={Offers} />
        </Switch>
      </Router>
    </>
  )
}

export default App
