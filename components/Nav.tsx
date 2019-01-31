import * as React from 'react';
import Link from 'next/link';
import {style} from 'typestyle';

const menu = style({
    backgroundImage: "url('../static/image/icon_menu@3x.png')",
    backgroundSize: "48px 48px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "48px",
    width: "48px",
});

const mypick = style({
    backgroundImage: "url('../static/image/button_mypick@3x.png')",
    backgroundSize: "81px 21px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "21px",
    width: "81px",
});

const map = style({
    backgroundImage: "url('../static/image/icon_map@3x.png')",
    backgroundSize: "48px 48px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "48px",
    width: "48px",
});



const nav = style({
    width: "100%",
    height: "48px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});


export default () => (
    <div className={nav}>
        <Link prefetch href="/hello"><span className={menu}></span></Link>
        <Link prefetch href="/hello"><span className={mypick}></span></Link>
        <Link prefetch href="/hello"><span className={map}></span></Link>
    </div>
);