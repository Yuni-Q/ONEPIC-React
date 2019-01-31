"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const typestyle_1 = require("typestyle");
const link_1 = require("next/link");
const logoStyle = typestyle_1.style({
    position: "fixed",
    backgroundImage: "url('../static/image/Onepic_logo_main.png@3x.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "186px 59.3px",
    top: "308px",
    width: "100%",
    height: "59.3px"
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
    bottom: "228px",
    textAlign: "center",
    color: "white",
    fontSize: "14px",
});
const sns = typestyle_1.style({
    position: "fixed",
    bottom: "148px",
    left: "50%",
    display: "flex",
    flexAlign: "column",
    justifyContent: "center",
    transform: "translateX(-50%)"
});
const naver = typestyle_1.style({
    backgroundImage: "url('../static/image/icon_naver_button@3x.png')",
    backgroundSize: "56px 56px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "59.3px",
    width: "59.3px",
    marginLeft: "8px",
    marginRight: "8px",
});
const google = typestyle_1.style({
    backgroundImage: "url('../static/image/icon_google_button@3x.png')",
    backgroundSize: "56px 56px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "59.3px",
    width: "59.3px",
    marginLeft: "8px",
    marginRight: "8px",
});
const facebook = typestyle_1.style({
    backgroundImage: "url('../static/image/icon_facebook_button@3x.png')",
    backgroundSize: "56px 56px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "59.3px",
    width: "59.3px",
    marginLeft: "8px",
    marginRight: "8px",
});
class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: 0,
        };
    }
    render() {
        return (React.createElement("div", { className: loginStyle },
            React.createElement("div", { className: logoStyle }),
            React.createElement("div", { className: contentStyle }, "Login to your SNS account"),
            React.createElement("div", { className: sns },
                React.createElement(link_1.default, { prefetch: true, href: "/main2" },
                    React.createElement("div", { className: facebook })),
                React.createElement(link_1.default, { prefetch: true, href: "/main2" },
                    React.createElement("div", { className: naver })),
                React.createElement(link_1.default, { prefetch: true, href: "/main2" },
                    React.createElement("div", { className: google })))));
    }
}
exports.default = Hello;
;
