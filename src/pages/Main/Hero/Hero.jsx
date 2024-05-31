import {
  CartIcon,
  HeartIcon,
  MessageIcon,
  ScalesIcon,
  StarIcon,
  WhiteStarIcon,
} from "../../../assets/icons";
import Container from "../../../components/Container/Container";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero_section}>
      <Container>
        <img src="./images/phone_img.png" alt="" />

        <div className={styles.cubes_wrapper}>
          <div className={styles.first_cube_wrapper}>
            <div className={styles.first_cube}></div>
          </div>
          <div className={styles.second_cube}></div>
        </div>

        <div className={styles.top_wrapper}>
          <div className={styles.star_wrapper}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <WhiteStarIcon />
            <WhiteStarIcon />
            <p className={styles.star_number}>5.0</p>
          </div>

          <div className={styles.message_wrapper}>
            <MessageIcon />
            <p className={styles.message_text}>136 отзывов</p>
          </div>
        </div>
        <p className={styles.code}>
          <span>Код:</span> 5G2MY-526123
        </p>
        <div className={styles.circle_wrapper}>
          <div className={styles.circle}></div>
          <p>В наличии</p>
        </div>

        <p className={styles.product_name}>
          Samsung Galaxy Tab E 9.6" 3G 8Gb (SM-T561NZKA) Black
        </p>
        <div className={styles.memory_wrapper}>
          <p className={styles.small_memory}>16Gb</p>
          <p className={styles.big_memory}>32Gb</p>
        </div>

        <div className={styles.product_price_wrapper}>
          <p className={styles.price}>
            <span>30 580</span> 22 599
          </p>
          <p className={styles.type_of_money}>грн</p>
        </div>

        <p className={styles.economy}>Экономия: 7 981 грн</p>
        <div className={styles.icons_wrapper}>
          <ScalesIcon />
          <HeartIcon />
          <CartIcon />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
