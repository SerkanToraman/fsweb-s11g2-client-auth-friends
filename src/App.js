import { Route, Switch } from 'react-router-dom';

import './App.css';

//import components
import Navtopbar from './components/Navtopbar';
import Loginform from './components/Loginform';
import Friends from './components/Friends';
import Addfriend from './components/Addfriend';


function App() {
  return (
    <div className='my-5 mx-5'>
      <Navtopbar/>
      <hr/>
      <Switch>
          <Route exact path="/login">
            <Loginform/>
          </Route>
          <Route path="/friends/add">
              <Addfriend/>
          </Route>
          <Route  path="/friends">
            <Friends/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
