import logo from './logo.svg';
import './App.css';
import home from './components/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>

      <>

        <Route exact path="/" component={home} />
        <Switch>
        </Switch>
      </>
    </Router>
  );
}

export default App;

