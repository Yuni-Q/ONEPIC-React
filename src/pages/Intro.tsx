import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../coponents/Logo'


const StyledIntro = styled.div`
    background-color: black;
    height: 100vw;
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