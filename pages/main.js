"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
// import Router from 'next/router'
const link_1 = require("next/link");
const StyleHome = styled_components_1.default.div `
    background-image: url('../static/image/Onepic_logo_main.png@3x.png');
    background-color: black;
    background-position: center; 
    background-repeat: no-repeat;
    background-size: 186px 59.3px;
    position: fixed;
    width 100%;
    height: 100%;
    `;
class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: 0,
        };
    }
    render() {
        // const redirect = this.state.redirect;
        return (React.createElement("li", null,
            React.createElement(link_1.default, { prefetch: true, href: "/" },
                React.createElement(StyleHome, null))));
    }
}
exports.default = Hello;
;
