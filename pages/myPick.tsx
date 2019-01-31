import * as React from 'react';
import Nav from '../components/Nav';
import { style } from 'typestyle';
import * as moment from 'moment';
import Link from 'next/link';

const mypick = style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vw",
    alignItems: "center",
});

const box = style({
    marginTop: "36px",
    backgroundRepeat: "no-repeat",
    width: "308px",
    height: "344px",
    backgroundImage: "url('../static/image/icon_heart_blue@3x.png')",
    backgroundSize: "292px 262.4px",
    backgroundPosition: "8px 8px",
});

const contentBox = style({
    marginTop: "262.4px",
    width: "100%",
    height: "73.6px",
    display: "flex",
    justifyContent: "space-between",
});

const info = style({
    marginLeft: "12px",
    marginTop: "12px",
    marginRight: "16px",
});

const heart = style({
    marginTop: "5.6px",
    marginRight: "16px",
    backgroundImage: "url('../static/image/icon_heart_blue@3x.png')",
    backgroundSize: "48px 48px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "48px",
    width: "48px",
});

const dateStyle = style({
    fontSize: "20px",
});

const title = style({
    fontSize: "20px",
    color: "rgb(26, 26, 26)",
});

const content = style({
    fontSize: "14px",
    color: "rgb(169, 169, 169)",
    textAlign: "center",
});

const fristButtonStyle = style({
    fontSize: "16px",
    left: "50%",
    display: "flex",
    justifyContent: "center",
    width: "310px",
    height: "48px",
    border: "solid 1px black",
    borderRadius: "50px",
    alignItems: "center",
    marginTop: "39px",
});

const ortherButtonStyle = style({
    fontSize: "16px",
    left: "50%",
    display: "flex",
    justifyContent: "center",
    width: "310px",
    height: "48px",
    border: "solid 1px black",
    borderRadius: "50px",
    alignItems: "center",
    marginTop: "12px",
});


export default class Hello extends React.Component {
    render() {
        const date = moment().format('YYYY.MM.DD');
        return (
            <div>
                <Nav />
                <div className={mypick}>
                    <div className={box}>
                        <div className={contentBox}>
                            <div className={info}>
                                <div className={dateStyle}>
                                    {date}
                                </div>
                                <div className={content}>
                                    Tokyo
                            </div>
                            </div>
                            <div className={heart} />
                        </div>
                    </div>
                    <div className={title}>ONE PICK이 처음이신가요?</div>
                    <div className={content}>
                        <p>매일 한장, 한 줄로 나의 특별한 순간을 기록해 보세요.<br/>
                        나의 첫 Pick을 올려보거나 다른 사람들의 피드를 구경해보세요.</p>
                    </div>
                    <Link prefetch href="/myPick"><div className={fristButtonStyle}>첫 사진 올려보기</div></Link>
                    <Link prefetch href="/myPick"><div className={ortherButtonStyle}>다른 사진 보러가기</div></Link>
                </div>
                
            </div>
        )
    }
};