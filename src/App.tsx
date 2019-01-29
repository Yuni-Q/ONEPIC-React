import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <h1>
          안녕하세요 Yuni-Q의 웹사이트입니다.
      </h1>
    </div>
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
