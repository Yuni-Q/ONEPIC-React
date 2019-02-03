import * as moment from 'moment';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHome = styled.div`
    background-color: black;
    height: 100vw;
`

const StyledDate = styled.div`
    position: fixed;
    bottom: 183px;
    width: 100%;
    font-size: 48px;
    text-align: center;
    color: white;
`


const StyledContent = styled.div`
    width: 100%;
    position: fixed;
    bottom: 124px;
    text-align: center;
    color: white;
    font-size: 14px;
`

const StyledButton = styled.div`
    font-size: 18px;
    color: white;
    position: fixed;
    bottom: 48px;
    left: 50%;
    display: flex;
    justify-content: center;
    transform: translateX(-50%);
    width: 305px;
    height: 48px;
    border: solid 1px white;
    border-radius: 48px;
    align-items: center;
`

export default class Home extends React.Component<{}, { redirect: number; }> {
  public render() {
    const date = moment().format('YYYY.MM.DD');
    return (
      <StyledHome>
        <StyledDate>{date}</StyledDate>
        <StyledContent>행복한 하루, 사진 한장을 남기다!</StyledContent>
        <Link to='/myPick'>
          <StyledButton>Tap</StyledButton>
        </Link>
      </StyledHome>
    )
  }
};