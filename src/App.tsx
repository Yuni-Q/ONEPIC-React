import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { SampleProvider } from './contexts/sample';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Login from './pages/Login';
import MyPick from './pages/MyPick';
// import Menu from 'components/Menu';

class App extends React.Component {
    public render() {
        return (
            // <SampleProvider>
                <BrowserRouter>
                    <>
                        <Route exact={true} path="/" component={Intro} />
                        <Route exact={true} path="/login" component={Login} />
                        <Route exact={true} path="/home" component={Home} />
                        <Route exact={true} path="/mypick" component={MyPick} />
                    </>
                </BrowserRouter>
            // </SampleProvider>
        );
    }
}

export default App;