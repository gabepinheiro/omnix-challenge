import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Home } from 'pages/Home'
import { Offers } from 'pages/Offers'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/ofertas' component={Offers} />
      </Switch>
    </Router>
  )
}

export default App
