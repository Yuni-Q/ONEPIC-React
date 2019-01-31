"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Links_1 = require("../components/Links");
exports.default = () => (React.createElement("div", null,
    React.createElement("h2", null, "styleJsx.tsx"),
    React.createElement("style", null, `
            h2 {
                color: red;
            }
            li {
                color: blue;
            }
        `),
    React.createElement(Links_1.default, null)));
// style jsx 어트리뷰트가 제대로 정의되지 않음. 
