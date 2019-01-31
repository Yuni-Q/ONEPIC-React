"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const link_1 = require("next/link");
exports.default = () => (React.createElement("div", null,
    React.createElement("ul", null,
        React.createElement("li", null,
            React.createElement(link_1.default, { href: "/" },
                React.createElement("a", null, "/"))),
        React.createElement("li", null,
            React.createElement(link_1.default, { prefetch: true, href: "/hello" },
                React.createElement("a", null, "/hello"))),
        React.createElement("li", null,
            React.createElement(link_1.default, { prefetch: true, href: "/hello?test=test" },
                React.createElement("a", null, "/hello?test=test"))),
        React.createElement("li", null,
            React.createElement(link_1.default, { prefetch: true, href: "/styledJsx" },
                React.createElement("a", null, "/styledJsx"))),
        React.createElement("li", null,
            React.createElement(link_1.default, { prefetch: true, href: "/styledComponents" },
                React.createElement("a", null, "/styledComponents"))),
        React.createElement("li", null,
            React.createElement(link_1.default, { prefetch: true, href: "/typeStyle" },
                React.createElement("a", null, "/typeStyle"))),
        React.createElement("li", null,
            React.createElement(link_1.default, { prefetch: true, href: "/main" },
                React.createElement("a", null, "/main"))))));
