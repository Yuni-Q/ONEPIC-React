"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const link_1 = require("next/link");
const typestyle_1 = require("typestyle");
const menu = typestyle_1.style({
    backgroundImage: "url('../static/image/icon_menu@3x.png')",
    backgroundSize: "48px 48px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "48px",
    width: "48px",
});
const mypick = typestyle_1.style({
    backgroundImage: "url('../static/image/button_mypick@3x.png')",
    backgroundSize: "81px 21px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "21px",
    width: "81px",
});
const map = typestyle_1.style({
    backgroundImage: "url('../static/image/icon_map@3x.png')",
    backgroundSize: "48px 48px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "48px",
    width: "48px",
});
const nav = typestyle_1.style({
    width: "100%",
    height: "48px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});
exports.default = () => (React.createElement("div", { className: nav },
    React.createElement(link_1.default, { prefetch: true, href: "/hello" },
        React.createElement("span", { className: menu })),
    React.createElement(link_1.default, { prefetch: true, href: "/hello" },
        React.createElement("span", { className: mypick })),
    React.createElement(link_1.default, { prefetch: true, href: "/hello" },
        React.createElement("span", { className: map }))));
