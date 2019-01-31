"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Links_1 = require("../components/Links");
const typestyle_1 = require("typestyle");
const h2Style = typestyle_1.style({
    color: 'red'
});
exports.default = () => (React.createElement("div", null,
    React.createElement("h2", { className: h2Style }, "typeStyle.tsx"),
    React.createElement(Links_1.default, null)));
