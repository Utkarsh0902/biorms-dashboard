import Sensors from './components/sensors/Sensors';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Graphs from './components/graphs/Graphs';
import User from './components/users/Users';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <div className="app" >
        <Sidebar/>
        <Navbar/>
        <div className="content">

          <Switch>
            <Route exact path="/">
              <Sensors/>
            </Route>

            <Route exact path="/graphs">
              <Graphs/>
            </Route>

            <Route exact path="/users">
              <User/>
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
