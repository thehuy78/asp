import '../style/App.css';
import '../style/Layout.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../style/Animation.scss"
import Search from './Search';
import Navbar from '../view/layout/Navbar';
import Footer from '../view/layout/Footer';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>

  )
}

export default App