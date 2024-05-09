import styles from "./Cards.module.css"


const Cards = (props) => {
    const {isFirst, title, img, description, item} = props;
    console.log(props)

    return <>
        <div className={`${styles.cards} ${isFirst ? styles.firstCards : styles.otherCards}`}>
            <img className={styles.cards__img} src={img} alt=""></img>
            <div>
                <div className={styles.cards__title}>{title}</div>
                <div className={styles.cards__description}>
                    {description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <ul className={styles.cards__list}>
                    {item.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </>
}

export default Cards;