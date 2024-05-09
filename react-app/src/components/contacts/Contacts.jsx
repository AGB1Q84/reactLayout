import "../contacts/contacts.css"

import instaImg from "../../img/contact/Instagram.svg"
import twitImg from "../../img/contact/Twitter.svg"
import youtubeImg from "../../img/contact/Youtube.svg"


const Contacts = () => <>
    <section className="contacts">
        <div className="container">
            <div className="contacts__content">
                <div className="content__b1">
                    <div className="content__b1__list">
                        <h1>Contact us</h1>
                        <ul>
                            <li className="mail">MD@namatgt.com</li>
                            <li className="phone">+996 772 545 556</li>
                        </ul>
                    </div>
                    <div className="content__b1__location">
                        IFZA Property FZCO, Dubai Silicon Oasis, DDP, Building A1, Dubai, United Arab Emirates
                    </div>
                    <div className="content__b1__icons">
                        <img src={instaImg} alt=""></img>
                        <img src={twitImg} alt=""></img>
                        <img src={youtubeImg} alt=""></img>
                    </div>
                </div>
                <div className="content__b2">
                    <div className="content__b2__input">
                        <input type="text" placeholder="Your name"/>
                        <input type="email" placeholder="Email"/>
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div className="content__btn">
                        <a href="#!">Send message</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>

export default Contacts;