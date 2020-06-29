import React from 'react';
import './App.css';
import Home from './screens/Home/Home';
import Splash from './screens/Splash/Splash';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducer/rootReducer'
import thunkMiddleware from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/towers" component={Home} />
        </Switch>
      </Router>
    </Provider>

  )

}

export default App;
