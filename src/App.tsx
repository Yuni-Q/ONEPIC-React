import { Route } from 'react-router-dom';
import * as React from 'react';
import { Home } from './coponents/Home';
// import Menu from 'components/Menu';
import { SampleProvider } from './contexts/sample';

class App extends React.Component {
    render() {
        return (
            <SampleProvider>
                <div className="panes">
                    <Route exact path="/" component={Home} />
                </div>
            </SampleProvider>
        );
    }
}

export default App;