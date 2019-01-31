import * as tslib_1 from "tslib";
import * as React from 'react';
import Links from '../components/Links';
var Hello = /** @class */ (function (_super) {
    tslib_1.__extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "hello.js"),
            React.createElement(Links, null)));
    };
    return Hello;
}(React.Component));
export default Hello;
//# sourceMappingURL=hello.js.map