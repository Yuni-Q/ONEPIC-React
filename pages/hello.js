"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Links_1 = require("../components/Links");
const request = require("superagent");
class Hello extends React.Component {
    static getInitialProps(context) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(context.pathname);
            console.log(context.query);
            console.log(context.asPath);
            const res = yield request.get('https://api.github.com/users');
            console.log(res.body.length);
            if (context.req) {
                return {
                    pathname: context.pathname,
                    isServer: true,
                    persons: res.body.length
                };
            }
            else {
                return {
                    pathname: context.pathname,
                    isServer: false,
                    persons: res.body.length
                };
            }
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h2", null, "hello.tsx"),
            React.createElement(Links_1.default, null),
            React.createElement("p", null, this.props.pathname),
            React.createElement("p", null, (this.props.isServer) ? '이 페이지는 서버로부터 랜더링 되었습니다.' : '이 페이지는 클라이언트에서 랜더링 되었습니다.'),
            React.createElement("p", null, this.props.persons)));
    }
}
exports.default = Hello;
