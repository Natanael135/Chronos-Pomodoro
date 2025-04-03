import Styles from "./styles.module.css";

type ButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export default function Button({
  icon,
  color = "green",
  ...props
}: ButtonProps) {
  return (
    <>
      <button className={`${Styles.button} ${Styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
