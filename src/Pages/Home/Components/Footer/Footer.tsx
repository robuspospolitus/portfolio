import { useState, useEffect } from 'react';
import './Footer.scss';

export default function Footer() {
    const text = ["❤","✿","✪"]
    const [tick, setTick] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTick(t => (t + 1) % 3);
        }, 1000);
    },[])

    return (
        <footer>
            <div id="made-with">
                <p>Made with </p>
                <p className='rainbow rotate'>{text[tick]}</p>
                <p> by Nadia Gill</p>
            </div>
            <div id="footer-separator"/>
            <div id="credit">
                <p>©2026 Nadia Gill. All rights reserved.</p>
            </div>
        </footer>
    )
}