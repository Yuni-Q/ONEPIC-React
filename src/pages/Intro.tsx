import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo'


const StyledIntro = styled.div`
  background-color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class Intro extends React.Component {
  public render() {
    return (
      <Link to="/login">
        <StyledIntro>
          <Logo />
        </StyledIntro>
      </Link>
    )
  }
};