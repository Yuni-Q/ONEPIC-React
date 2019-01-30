import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
// import { Provider as ReduxProvider } from 'react-redux';

const Home = () => {
  const StyleHome = styled.div`
    background-image: url('/Onepic_logo_main.png@3x.png');
    background-color: black;
    background-position: center; 
    background-repeat: no-repeat;
    background-size: 186px 59.3px;
    position: fixed;
    width 100%;
    height: 100%;
  `
  return (
    <StyleHome />
  );
};

const boards = () => {
  return (
    <div>
      <h1>
          게시판 입니다.
      </h1>
    </div>
  );
};






class App extends React.Component {
  public render() {
    return (
      <Router>
        <>
          <Route path="/" component={Home} />
          <Route path="/boards" component={boards} />
        </>
      </Router>
    );
  }
}

export default App;
