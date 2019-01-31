import * as React from 'react';
import {style} from 'typestyle';
import Link from 'next/link';
import * as moment from 'moment';

const dateStyle = style({
    position: "fixed",
    bottom: "183px",
    width: "100%",
    fontSize: "48px",
    textAlign: "center",
    color: "white",
});

const loginStyle = style({
    backgroundColor: "black",
    position: "fixed",
    height: "100%",
    width: "100%"
});

const contentStyle = style({
    width: "100%",
    position: "fixed",
    bottom: "124px",
    textAlign: "center",
    color: "white",
    fontSize: "14px",
});

const buttonStyle = style({
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
export default class Hello extends React.Component<{}, {redirect: number;}> {
    render() {
        const date = moment().format('YYYY.MM.DD');
        console.log(date);
        return (
            <div className={loginStyle}>
                <div className={dateStyle}>{date}</div>
                <div className={contentStyle}>행복한 하루, 사진 한장을 남기다!</div>
                <Link prefetch href="/myPick"><div className={buttonStyle}>Tap</div></Link>
            </div>
        )
    }
};