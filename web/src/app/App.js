import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {history} from '../_helpers';
import {LandingPage} from '../views/LandingPage';
import '../resources/css/App.css';

function App() {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/landing" component = {LandingPage} />
          <Redirect from="*" to="/landing"/>
        </Switch>
      </Router>
  );
}

export default App;
