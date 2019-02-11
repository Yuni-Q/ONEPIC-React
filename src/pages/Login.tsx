import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo'

const StyledLogin = styled.div`
  background-color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  algin-items: center;
`

const StyledLogo = styled(Logo)`
  margin-top: 100px;
  width: 100%;
`

const StyledContent = styled.div`
  width: 100%;
  position: fixed;
  bottom: 228px;
  text-align: center;
  color: white;
  font-size: 14px;
`

const StyledSnsBox = styled.div`
  position: fixed;
  bottom: 148px;
  left: 50%;
  display: flex;
  flex-align: column;
  justify-content: center;
  transform: translateX(-50%);
`

const StyledSnsLogo = styled.div<{ url: string }>`
  background-image: url('${(props => props.url)}');
  background-size: 56px 56px;
  background-position: center;
  background-repeat: no-repeat;
  height: 59.3px;
  width: 59.3px;
  margin-left: 8px;
  margin-right: 8px;
`

export default class Login extends React.Component<{ className: any }, {}> { // <{}, { redirect: number; }> {
  // constructor(props = {}) {
  //   super(props)
  //   this.state = {
  //     redirect: 0,
  //   }
  // }
  public render() {
    return (
      <StyledLogin>
        <StyledLogo />
        <StyledContent>Login to your SNS account</StyledContent>
        <StyledSnsBox>
          <Link to="/home">
            <StyledSnsLogo url={'/icon_naver_button@3x.png'} />
          </Link>
          <Link to="/home">
            <StyledSnsLogo url={'/icon_google_button@3x.png'} />
          </Link>
          <Link to="/home">
            <StyledSnsLogo url={'/icon_facebook_button@3x.png'} />
          </Link>
        </StyledSnsBox>
      </StyledLogin>
    )
  }
};