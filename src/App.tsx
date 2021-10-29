import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Header } from 'layout/Header'

import { Home } from 'pages/Home'
import { Offers } from 'pages/Offers'
import { NotFound } from 'pages/NotFound'

function App () {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/ofertas/:cep' component={Offers} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default App
