import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import Styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvaliableThemes = "dark" | "light";

export default function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvaliableThemes) || "dark";
    return storageTheme;
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={Styles.menu}>
      <a
        href="#"
        className={Styles.menuLink}
        aria-label="Ir para pagina Home"
        title="Ir para a pagina Home"
      >
        <HouseIcon />
      </a>
      <a
        href="#"
        className={Styles.menuLink}
        aria-label="Ver Historico"
        title="Ver Historico"
      >
        <HistoryIcon />
      </a>
      <a
        href="#"
        className={Styles.menuLink}
        aria-label="Ir para pagina de configurações"
        title="Ir para pagina de configurações"
      >
        <SettingsIcon />
      </a>
      <a
        href="#"
        className={Styles.menuLink}
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
