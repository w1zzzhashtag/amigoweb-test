import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Main, SignIn } from './pages'


const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/signin" exact component={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;
