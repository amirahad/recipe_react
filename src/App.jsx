import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Create from './pages/create/Create'
import Error from './pages/error/Error'
import Home from './pages/home/Home'
import Recipe from './pages/recipes/Recipes'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/create" >
            <Create />
          </Route>
          <Route path="/recipes/:id" >
            <Recipe />
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
