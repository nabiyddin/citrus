import { DegreeIcon, YouTubeIcon } from "../../assets/icons";
import Container from "../Container/Container";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <YouTubeIcon />
        <DegreeIcon />
      </Container>
    </header>
  );
}

export default Header;
