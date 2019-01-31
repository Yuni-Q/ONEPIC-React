import * as React from 'react';
import {style} from 'typestyle';
import Link from 'next/link';


const logoStyle = style({
    position: "fixed",
    backgroundImage: "url('../static/image/Onepic_logo_main.png@3x.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "186px 59.3px",
    top: "308px",
    width: "100%",
    height: "59.3px"
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
    bottom: "228px",
    textAlign: "center",
    color: "white",
    fontSize: "14px",
});

const sns = style({
    position: "fixed",
    bottom: "148px",
    left: "50%",
    display: "flex",
    flexAlign: "column",
    justifyContent: "center",
    transform: "translateX(-50%)"
});

const naver = style({
    backgroundImage: "url('../static/image/icon_naver_button@3x.png')",
    backgroundSize: "56px 56px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "59.3px",
    width: "59.3px",
    marginLeft: "8px",
    marginRight: "8px",
});

const google = style({
    backgroundImage: "url('../static/image/icon_google_button@3x.png')",
    backgroundSize: "56px 56px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "59.3px",
    width: "59.3px",
    marginLeft: "8px",
    marginRight: "8px",
});

const facebook = style({
    backgroundImage: "url('../static/image/icon_facebook_button@3x.png')",
    backgroundSize: "56px 56px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "59.3px",
    width: "59.3px",
    marginLeft: "8px",
    marginRight: "8px",
});

export default class Hello extends React.Component<{}, {redirect: number;}> {
    constructor() {
        super()
        this.state = {
            redirect: 0,
        }
    }
    render() {
        return (
            <div className={loginStyle}>
                <div className={logoStyle} />
                <div className={contentStyle}>Login to your SNS account</div>
                <div className={sns}>
                    <Link prefetch href="/main2"><div className={facebook} /></Link>
                    <Link prefetch href="/main2"><div className={naver} /></Link>
                    <Link prefetch href="/main2"><div className={google} /></Link>
                </div>
            </div>
        )
    }
};