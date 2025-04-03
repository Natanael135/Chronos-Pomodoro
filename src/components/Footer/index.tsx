import Styles from "./styles.module.css";

export default function Footer() {
  return (
    <>
      <footer className={Styles.footer}>
        <a href="">Entenda como Funciona o Pomodoro</a>
        <a href="">
          Chronos Pomodoro &copy; {new Date().getFullYear()} - By Natanael Melo
        </a>
      </footer>
    </>
  );
}
