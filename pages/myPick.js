"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Nav_1 = require("../components/Nav");
const typestyle_1 = require("typestyle");
const moment = require("moment");
const link_1 = require("next/link");
const mypick = typestyle_1.style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vw",
    alignItems: "center",
});
const box = typestyle_1.style({
    marginTop: "36px",
    backgroundRepeat: "no-repeat",
    width: "308px",
    height: "344px",
    backgroundImage: "url('../static/image/icon_heart_blue@3x.png')",
    backgroundSize: "292px 262.4px",
    backgroundPosition: "8px 8px",
});
const contentBox = typestyle_1.style({
    marginTop: "262.4px",
    width: "100%",
    height: "73.6px",
    display: "flex",
    justifyContent: "space-between",
});
const info = typestyle_1.style({
    marginLeft: "12px",
    marginTop: "12px",
    marginRight: "16px",
});
const heart = typestyle_1.style({
    marginTop: "5.6px",
    marginRight: "16px",
    backgroundImage: "url('../static/image/icon_heart_blue@3x.png')",
    backgroundSize: "48px 48px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "48px",
    width: "48px",
});
const dateStyle = typestyle_1.style({
    fontSize: "20px",
});
const title = typestyle_1.style({
    fontSize: "20px",
    color: "rgb(26, 26, 26)",
});
const content = typestyle_1.style({
    fontSize: "14px",
    color: "rgb(169, 169, 169)",
    textAlign: "center",
});
const fristButtonStyle = typestyle_1.style({
    fontSize: "16px",
    left: "50%",
    display: "flex",
    justifyContent: "center",
    width: "310px",
    height: "48px",
    border: "solid 1px black",
    borderRadius: "50px",
    alignItems: "center",
    marginTop: "39px",
});
const ortherButtonStyle = typestyle_1.style({
    fontSize: "16px",
    left: "50%",
    display: "flex",
    justifyContent: "center",
    width: "310px",
    height: "48px",
    border: "solid 1px black",
    borderRadius: "50px",
    alignItems: "center",
    marginTop: "12px",
});
class Hello extends React.Component {
    render() {
        const date = moment().format('YYYY.MM.DD');
        return (React.createElement("div", null,
            React.createElement(Nav_1.default, null),
            React.createElement("div", { className: mypick },
                React.createElement("div", { className: box },
                    React.createElement("div", { className: contentBox },
                        React.createElement("div", { className: info },
                            React.createElement("div", { className: dateStyle }, date),
                            React.createElement("div", { className: content }, "Tokyo")),
                        React.createElement("div", { className: heart }))),
                React.createElement("div", { className: title }, "ONE PICK\uC774 \uCC98\uC74C\uC774\uC2E0\uAC00\uC694?"),
                React.createElement("div", { className: content },
                    React.createElement("p", null,
                        "\uB9E4\uC77C \uD55C\uC7A5, \uD55C \uC904\uB85C \uB098\uC758 \uD2B9\uBCC4\uD55C \uC21C\uAC04\uC744 \uAE30\uB85D\uD574 \uBCF4\uC138\uC694.",
                        React.createElement("br", null),
                        "\uB098\uC758 \uCCAB Pick\uC744 \uC62C\uB824\uBCF4\uAC70\uB098 \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uC758 \uD53C\uB4DC\uB97C \uAD6C\uACBD\uD574\uBCF4\uC138\uC694.")),
                React.createElement(link_1.default, { prefetch: true, href: "/myPick" },
                    React.createElement("div", { className: fristButtonStyle }, "\uCCAB \uC0AC\uC9C4 \uC62C\uB824\uBCF4\uAE30")),
                React.createElement(link_1.default, { prefetch: true, href: "/myPick" },
                    React.createElement("div", { className: ortherButtonStyle }, "\uB2E4\uB978 \uC0AC\uC9C4 \uBCF4\uB7EC\uAC00\uAE30")))));
    }
}
exports.default = Hello;
;
