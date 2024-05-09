import "./services.css"
import Cards from "../cards/Cards"

import cardsImg1 from "../../img/servicesImg/img_block1.png"
import cardsImg2 from "../../img/servicesImg/img_block2.png"

const Services = () => {

    const consultingDesc = ["Our experts help companies choose and implement IT solutions to improve business processes, reduce costs, and enhance competitiveness.", 
                            "We ensure adaptation to changing technologies and market conditions by developing strategies for effective IT utilization."];

    const consultingList = ["Improvement of business processes", "Cost reduction"];

    const financeDesc = ["Our team helps optimize expenses, manage finances, and improve the efficiency of business processes.", "We develop strategies for risk management, tax optimization, and investments, as well as offer services to enhance management processes and crisis management."];

    const financeList = ["Efficiency and cost optimization", "Risk management and tax optimization"];

    return <>
        <section className="services">
            <div className="container">
                <div className="services__header">
                        <h1>Our Services</h1>
                        <p>In our company, there are four main directions.</p>
                </div>
                <div className="services__cards">
                    <Cards isFirst={true} title="IT consulting" img={cardsImg1} description={consultingDesc} item={consultingList}/>
                    <Cards title="Finance" img={cardsImg2} description={financeDesc} item={financeList}/>
                </div>
            </div>
        </section>
    </>
}

export default Services;