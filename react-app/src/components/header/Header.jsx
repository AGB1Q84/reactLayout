import "./header.css";

import logoImg from "./../../img/namatLOGO/icon.svg";

function Header () {
    return <>
                <header className="header">
                    <div className="container">
                        <div className="header__row">
                            <div className="header__logo">
                                <img src={logoImg} alt="Logo"/>
                                <div>
                                    <span className="logo-text">NAMAT</span>
                                    <span className="logo-text subtext">GLOBAL TRADE</span>
                                </div>
                            </div>
                            <nav className="header__nav">
                                <ul>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Partners</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/" class="get-started-link">Get Started</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </>
}
export default Header;