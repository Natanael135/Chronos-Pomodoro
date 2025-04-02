import { TimerIcon } from "lucide-react";
import Styles from "./styles.module.css";

export default function Logo() {
  return (
    <div className={Styles.logo}>
      <a href="#" className={Styles.logoLink}>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
