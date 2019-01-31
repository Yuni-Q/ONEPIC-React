"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const typestyle_1 = require("typestyle");
const link_1 = require("next/link");
const HomeStyle = typestyle_1.style({
    backgroundImage: "url('../static/image/Onepic_logo_main.png@3x.png')",
    backgroundColor: "black",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "186px 59.3px",
    position: "fixed",
    width: "100%",
    height: "100%",
});
class Hello extends React.Component {
    render() {
        return (React.createElement(link_1.default, { prefetch: true, href: "/login" },
            React.createElement("div", { className: HomeStyle })));
    }
}
exports.default = Hello;
;
