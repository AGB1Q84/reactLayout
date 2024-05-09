import "./about.css"

const About = () => {
    return <>
        <section className="about">
            <div className="container">
                <div className="about__t">
                    <div className="about__table">
                            <table>
                                    <tr>
                                        <th>$10 Billion</th>
                                        <th>18-23%</th>
                                        <th>50-200%</th>
                                    </tr>
                                    <tr>
                                        <td>Saved for our clients globally</td>
                                        <td>Average client savings over the last 25 years</td>
                                        <td>Typical client EBITDA impact from strategic sourcing projects</td>
                                    </tr>
                                </table>
                        
                        </div>

                </div>
                <div className="about__us">
                    <div className="about__content">
                        <div className="about__desc">
                            <h1>NAMAT Global Trade</h1>
                            <p>collaborate with leading manufacturers to provide our clients with the best innovative solutions that contribute to expanding their businesses</p>
                        </div>
                        <div className="about__nav">
                            <ul>
                                <li>
                                We prioritize close collaboration with our suppliers. We become their trusted representatives, advisors, ready to solve any problems together or utilize new technologies and opportunities.
                                </li>
                                <li>
                                We combine expert technical and market knowledge with a progressive partner support program. By closely collaborating with our dealers, we aim to ensure their dynamic growth and development, achieving results together.
                                </li>
                                <li>
                                Working on projects worldwide, we tailor solutions to the specifics of each market.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="about__foot">
                        <h1> ABOUT US </h1>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default About;