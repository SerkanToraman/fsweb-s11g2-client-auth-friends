import { Route, Switch } from 'react-router-dom';

import './App.css';

//import components
import Navtopbar from './components/Navtopbar';
import Loginform from './components/Loginform';
import Friends from './components/Friends';
import Addfriend from './components/Addfriend';
import PrivateRoute from './contexts/PrivateRoute';


function App() {
  return (
    <div className='w-6/12 mx-auto'>
      <Navtopbar/>
      <hr/>
      <Switch>
          <Route exact path="/login">
            <Loginform/>
          </Route>
          <PrivateRoute path="/friends/add">
              <Addfriend/>
          </PrivateRoute>
          <PrivateRoute  path="/friends">
            <Friends/>
          </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
