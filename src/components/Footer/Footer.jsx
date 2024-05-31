import Container from "../Container/Container";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <Container className={styles.container}>
      <footer>
        <div className={styles.img_wrapper}>
          <img src="./images/sale.png" alt="" />
          <div>
            <p className={styles.text_aksiya}>АКЦИЯ</p>
            <p className={styles.price_text}>100 грн на первую покупку!</p>
          </div>
        </div>
        <h4 className={styles.middle_text}>Быстрые характеристики</h4>
        <ul className={styles.list_item}>
          <li>Li-Polymer</li>
          <li>7500 mAh</li>
          <li>5 V</li>
          <li>Время автономной работы в режиме ожидания 12 ч</li>
        </ul>
      </footer>
    </Container>
  );
}

export default Footer;
