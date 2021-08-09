import React from 'react'
import facebook_ico from '../img/facebook_ico.png'
import instagram_ico from '../img/instagram_ico.png'
import telegram_ico from '../img/telegram_ico.png'
import './footer.css'
import Links from './Links'

function Footer() {
    return (

        <div className="container footer_wrapper">
            <div className="copyright">2021 © Fake, Inc. All Rights Reserved.</div>
            <div className="links">
                <div className="social">
                    <Links
                        src={facebook_ico}
                        href='https://www.facebook.com/'
                    />
                    <Links
                        src={instagram_ico}
                        href='https://www.instagram.com'
                    />
                    <Links
                        src={telegram_ico}
                        href='https://web.telegram.org'
                    />
                </div>
                <div className="tech_support">
                    <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer noopener">Support</a>
                </div>
            </div>
        </div>

    )
}

export default Footer
