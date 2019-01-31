import * as React from 'react';
import {style} from 'typestyle';
import Link from 'next/link';


const HomeStyle = style({
    backgroundImage: "url('../static/image/Onepic_logo_main.png@3x.png')",
    backgroundColor: "black",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "186px 59.3px",
    position: "fixed",
    width: "100%",
    height: "100%",
});

export default class Hello extends React.Component {
    render() {
        return (
            <Link prefetch href="/login"><div className={HomeStyle} /></Link>
        )
    }
};