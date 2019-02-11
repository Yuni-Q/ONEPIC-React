import { inject, observer } from 'mobx-react';
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

const StyledMap = styled.button`
  background-image: url('/icon_map@3x.png');
  background-size: 48px 48px;
  background-position: center;
  background-repeat: no-repeat;
  height: 48px;
  width: 48px;
`
@inject('leftBarStore')
@observer
export default class Nav extends React.Component<INavProps, {}> {
  public render() {
    // const { LeftBarStore } = this.props;
    console.log(this.props.leftBarStore.openLeftBar)
    return (
      <StyledNav>
        {/* <Link to='/'> */}
          <StyledMenu
          onClick={this.props.leftBarStore.openLeftBar}/>
        {/* </Link> */}
        <Link to='/'>
          <StyledMyPick />
        </Link>
        {/* <Link to='/'> */}
          <StyledMap 
          onClick={this.props.leftBarStore.closeLeftBar}/>
        {/* </Link> */}
      </StyledNav>
    )
  }
}

interface INavProps {
  leftBarStore?: any
}