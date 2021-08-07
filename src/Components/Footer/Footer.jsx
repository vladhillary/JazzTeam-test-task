import React from 'react'
import facebook_ico from '../img/facebook_ico.png'
import instagram_ico from '../img/instagram_ico.png'
import telegram_ico from '../img/telegram_ico.png'
import './footer.css'

function Footer() {
    return (

        <div className="container footer_wrapper">
            <div className="copyright">2021 © Fake, Inc. All Rights Reserved.</div>
            <div className="links">
                <div className="social">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
                        <img src={facebook_ico} alt="facebook link" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">
                        <img src={instagram_ico} alt="insta link" />
                    </a>
                    <a href="https://web.telegram.org" target="_blank" rel="noreferrer noopener">
                        <img src={telegram_ico} alt="tg link" />
                    </a>
                </div>
                <div className="tech_support">
                    <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer noopener">Support</a>
                </div>
            </div>
        </div>

    )
}

export default Footer
