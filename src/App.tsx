import * as React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import styled from 'styled-components';
import { connect} from 'react-redux';
import { addAge } from 'src';


// class Home extends React.Component<HomeProps, HomeState> {

//   constructor(props={}) {
//     super(props);
//     this.state = {
//        redirect: false,
//     };
//   }
  
//   render() {
//     const StyleHome = styled.div`
//     background-image: url('/Onepic_logo_main.png@3x.png');
//     background-color: black;
//     background-position: center; 
//     background-repeat: no-repeat;
//     background-size: 186px 59.3px;
//     position: fixed;
//     width 100%;
//     height: 100%;
//     `
    
//     const redirect = this.state.redirect;
//     return (
//       <>
//         <StyleHome onClick={() => {
//             this.setState({ redirect: true })
//         }} />
//         {
//           redirect ? <Redirect to="/boards" /> : null
//         }
//       </>
//     );
//   }
// };

// const boards = () => {
//   return (
//     <div>
//       <h1>
//         게시판 입니다.
//       </h1>
//     </div>
//   );
// };


const App: React.SFC<AppProps> = (props) => {
  return (
    <>
      <h1>hi</h1>
      {props.age}
      <button onClick={props.onAddClick}>click</button>
    </>
    // <Router>
    //   <>
    //     <Route path="/" component={Home} />
    //     <Route path="/boards" component={boards} />
    //   </>
    // </Router>
  );
};

const mapStatetoProps = (state: {age: number;}) => {
  return {
     age: state.age
  }
}

const mapDispatchtoProps = (dispatch: Function) => {
  return {
    onAddClick: () => {
      dispatch(addAge());
    }
  };
};

const AppContainer = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(App);

export default AppContainer;

// interface HomeProps {
// }

// interface HomeState {
//   redirect: boolean;
// }
interface AppProps {
  age: number;
  onAddClick(): void;
}