import * as React from 'react';
import { Route } from 'react-router-dom';
import './App.css';


import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <>
        <Route exact path="/" component={Home} />
      </>
    );
  }
}

export default App;
