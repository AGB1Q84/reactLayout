import "./footer.css"

import logoImg from "../../img/namatLOGO/icon.svg"

import instaImg from "../../img/footIcons/Instagram.svg"
import twitImg from "../../img/footIcons/Twitter.svg"
import youtubeImg from "../../img/footIcons/Youtube.svg"


const Footer = () => {

    return<>
        <footer>
            <div className="container">
                <div className="foot__content">
                    <div className="foot__logo">
                        <img src={logoImg} alt="Logo"/>
                        <div>
                            <span className="logo-text">NAMAT</span>
                            <span className="logo-text subtext">GLOBAL TRADE</span>
                        </div>
                    </div>
                    <nav className="foot__nav">
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Partners</a></li>
                            <li><a href="/">Contact</a></li>
                            <li>
                                <a href="/" class="get-started-link">Get Started</a>      
                            </li>
                        </ul>
                    </nav>
                    <div className="foot">
                        <p>© 2024 Namat Global Trade. All rights reserved</p>
                        <div className="foot__icons">
                            <img className="icon" src={instaImg} alt=""></img>
                            <img lassName="icon" src={twitImg} alt=""></img>
                            <img src={youtubeImg} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;