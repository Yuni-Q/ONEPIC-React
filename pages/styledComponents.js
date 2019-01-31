"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Links_1 = require("../components/Links");
const styled_components_1 = require("styled-components");
const StyledH2 = styled_components_1.default.h2 `
    color: red;
`;
exports.default = () => (React.createElement("div", null,
    React.createElement(StyledH2, null, "styledComponents.tsx"),
    React.createElement(Links_1.default, null)));
// type definition 내장
// Next 에서 이슈가 있음. 서버와 클라이언트 체크섬이 상이한 문제
// https://www.styled-components.com/docs/advanced#server-side-rendering 
