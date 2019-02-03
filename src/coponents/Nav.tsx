import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledMenu = styled.div`
    background-image: url('/icon_menu@3x.png');
    background-size: 48px 48px;
    background-position: center;
    background-repeat: no-repeat;
    height: 48px;
    width: 48px;
`

const StyledMyPick = styled.div`
  background-image: url('/button_mypick@3x.png');
  background-size: 81px 21px;
  background-position: center;
  background-repeat: no-repeat;
  height: 21px;
  width: 81px;
`

const StyledMap = styled.div`
  background-image: url('/icon_map@3x.png');
  background-size: 48px 48px;
  background-position: center;
  background-repeat: no-repeat;
  height: 48px;
  width: 48px;
`

export default () => (
  <StyledNav>
    <Link to='/'>
      <StyledMenu />
    </Link>
    <Link to='/'>
      <StyledMyPick />
    </Link>
    <Link to='/'>
      <StyledMap />
    </Link>
  </StyledNav>
);