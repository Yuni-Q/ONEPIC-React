import * as moment from 'moment';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../coponents/Nav';

const StyleMyPick = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vw;
    align-items: center;
`

const StyledBox = styled.div`
    margin-top: 36px;
    background-repeat: no-repeat;
    width: 308px;
    height: 344px;
    background-image: url('/icon_heart_blue@3x.png');
    background-size: 292px 262.4px;
    background-position: 8px 8px;
`

const StyledContentBox = styled.div`
    margin-top: 262.4px;
    width: 100%;
    height: 73.6px;
    display: flex;
    justify-content: space-between;
`

const StyledInfo = styled.div`
    margin-left: 12px;
    margin-top: 12px;
    margin-right: 16px;
`

const StyledHeart = styled.div`
    margin-top: 5.6px;
    margin-right: 16px;
    background-image: url('/icon_heart_blue@3x.png');
    background-size: 48px 48px;
    background-position: center;
    background-repeat: no-repeat;
    height: 48px;
    width: 48px;
`

const StyledDate = styled.div`
    font-size: 20px;
`

const StyledContent = styled.div`
    font-size: 14px;
    color: rgb(169, 169, 169);
    text-align: center;
`

const StyledTitle = styled.div`
    font-size: 20px;
    color: rgb(26, 26, 26);
`

const StyledFristButton = styled.div`
    font-size: 16px;
    left: 50%;
    display: flex;
    justify-content: center;
    width: 310px;
    height: 48px;
    border: solid 1px black;
    border-radius: 50px;
    align-items: center;
    margin-top: 39px;
`

const StyleOrtherButton = styled.div`
    font-size: 16px;
    left: 50%;
    display: flex;
    justify-content: center;
    width: 310px;
    height: 48px;
    border: solid 1px black;
    border-radius: 50px;
    align-items: center;
    margin-top: 12px;
`
export default class MyPick extends React.Component {
  public render() {
    const date = moment().format('YYYY.MM.DD');
    return (
      <>
        <Nav />
        <StyleMyPick>
          <StyledBox>
            <StyledContentBox>
              <StyledInfo>
                <StyledDate>
                  {date}
                </StyledDate>
                <StyledContent>
                  Tokyo
                </StyledContent>
              </StyledInfo>
              <StyledHeart />
            </StyledContentBox>
          </StyledBox>
          <StyledTitle>ONE PICK이 처음이신가요?</StyledTitle>
          <StyledContent>
            <p>매일 한장, 한 줄로 나의 특별한 순간을 기록해 보세요.<br />
              나의 첫 Pick을 올려보거나 다른 사람들의 피드를 구경해보세요.</p>
          </StyledContent>
          <Link to='/'>
            <StyledFristButton>첫 사진 올려보기</StyledFristButton>
          </Link>
          <Link to='/'>
            <StyleOrtherButton>다른 사진 보러가기</StyleOrtherButton>
          </Link>
        </StyleMyPick>
      </>
    )
  }
}