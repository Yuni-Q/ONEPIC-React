import * as React from 'react';
import styled from 'styled-components';
// import Router from 'next/router'
import Link from 'next/link';


    const StyleHome = styled.div`
    background-image: url('../static/image/Onepic_logo_main.png@3x.png');
    background-color: black;
    background-position: center; 
    background-repeat: no-repeat;
    background-size: 186px 59.3px;
    position: fixed;
    width 100%;
    height: 100%;
    `

export default class Hello extends React.Component<{}, {redirect: number;}> {
    constructor() {
        super()
        this.state = {
            redirect: 0,
        }
    }
    render() {
        return (
            <li><Link prefetch href="/"><StyleHome /></Link></li>
        )
    }
};