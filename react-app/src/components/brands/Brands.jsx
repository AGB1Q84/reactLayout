import "./brands.css"

import adobe from "../../img/icons/adobe.png"
import asus from "../../img/icons/asus.png"
import canon from "../../img/icons/canon.png"
import dell from "../../img/icons/dell.png"
import epson from "../../img/icons/epson.png"
import eset from "../../img/icons/eset.png"
import huawei from "../../img/icons/huawei.png"
import ibm from "../../img/icons/ibm.png"
import lenovo from "../../img/icons/lenovo.png"
import ms from "../../img/icons/ms.png"
import oracle from "../../img/icons/oracle.png"
import samsung from "../../img/icons/samsung.png"

const Brands = () => {
    return <>
        <section className="brands">
            <div className="container">
                <div className="brands__content">
                    <div className="brands__text">
                        <h1>50+</h1>
                        <h1>PARTNERS</h1>
                        <p>We specialize in innovative solutions, adapting them to the needs of each market. </p>
                    </div>
                    <div className="brands__list">
                        <ul>
                            <li><a href="#!"><img src={adobe} alt=""></img></a></li>
                            <li><a href="#!"><img src={dell} alt=""></img></a></li>
                            <li><a href="#!"><img src={ms} alt=""></img></a></li>
                            <li><a href="#!"><img src={asus} alt=""></img></a></li>
                            <li><a href="#!"><img src={ibm} alt=""></img></a></li>
                            <li><a href="#!"><img src={huawei} alt=""></img></a></li>
                            <li><a href="#!"><img src={samsung} alt=""></img></a></li>
                            <li><a href="#!"><img src={canon} alt=""></img></a></li>
                            <li><a href="#!"><img src={oracle} alt=""></img></a></li>
                            <li><a href="#!"><img src={eset} alt=""></img></a></li>
                            <li><a href="#!"><img src={lenovo} alt=""></img></a></li>
                            <li><a href="#!"><img src={epson} alt=""></img></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default Brands;
