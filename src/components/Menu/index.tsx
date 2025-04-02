import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import Styles from "./styles.module.css";

export default function Menu() {
  return (
    <nav className={Styles.menu}>
      <a href="#" className={Styles.menuLink}>
        <HouseIcon />
      </a>
      <a href="#" className={Styles.menuLink}>
        <HistoryIcon />
      </a>
      <a href="#" className={Styles.menuLink}>
        <SettingsIcon />
      </a>
      <a href="#" className={Styles.menuLink}>
        <SunIcon />
      </a>
    </nav>
  );
}
