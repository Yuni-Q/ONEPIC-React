import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Intro from './pages/Intro';
import Login from './pages/Login';
import MyPick from './pages/MyPick';

import LeftBar from './components/LeftBar';
import LeftBarStore from './stores/LeftBarStore';


import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider

class App extends React.Component {
    public render() {
        const leftBarStore = new LeftBarStore(); // 스토어 인스턴스를 만들고
        return (
            <Provider leftBarStore={leftBarStore}>
                <BrowserRouter>
                    <>
                        <LeftBar
                        // closeLeftBar={closeLeftBar}
                        // isOpen={leftBarIsOpen}
                        />
                        <Route exact={true} path="/" component={Intro} />
                        <Route exact={true} path="/login" component={Login} />
                        <Route exact={true} path="/home" component={Home} />
                        <Route exact={true} path="/mypick" component={MyPick} />
                    </>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;