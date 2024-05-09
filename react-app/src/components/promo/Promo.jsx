import "./promo.css"
import promoImg from "../../img/Hero/PromoImg.png"

const Promo = () => {
    return <>
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <div className="promo__title">Global distributor of leading global IT manufacturers</div>
                        <div className="promo__desc">In our portfolio, we have over 50+ major global IT hardware and software manufacturers.</div>
                        <div className="promo__btn">
                            <a href="/">More about us</a>
                        </div>
                    </div>
                    <div className="promo__img">
                        <img src={promoImg} alt="Promo"></img>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Promo;