"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const typestyle_1 = require("typestyle");
const link_1 = require("next/link");
const moment = require("moment");
const dateStyle = typestyle_1.style({
    position: "fixed",
    bottom: "183px",
    width: "100%",
    fontSize: "48px",
    textAlign: "center",
    color: "white",
});
const loginStyle = typestyle_1.style({
    backgroundColor: "black",
    position: "fixed",
    height: "100%",
    width: "100%"
});
const contentStyle = typestyle_1.style({
    width: "100%",
    position: "fixed",
    bottom: "124px",
    textAlign: "center",
    color: "white",
    fontSize: "14px",
});
const buttonStyle = typestyle_1.style({
    fontSize: "18px",
    color: "white",
    position: "fixed",
    bottom: "48px",
    left: "50%",
    display: "flex",
    justifyContent: "center",
    transform: "translateX(-50%)",
    width: "305px",
    height: "48px",
    border: "solid 1px white",
    borderRadius: "50px",
    alignItems: "center",
});
class Hello extends React.Component {
    render() {
        const date = moment().format('YYYY.MM.DD');
        console.log(date);
        return (React.createElement("div", { className: loginStyle },
            React.createElement("div", { className: dateStyle }, date),
            React.createElement("div", { className: contentStyle }, "\uD589\uBCF5\uD55C \uD558\uB8E8, \uC0AC\uC9C4 \uD55C\uC7A5\uC744 \uB0A8\uAE30\uB2E4!"),
            React.createElement(link_1.default, { prefetch: true, href: "/myPick" },
                React.createElement("div", { className: buttonStyle }, "Tap"))));
    }
}
exports.default = Hello;
;
