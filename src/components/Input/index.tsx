import Styles from "./styles.module.css";

type InputProps = {
  type: string;
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export default function Input({ id, type, labelText, ...rest }: InputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={Styles.input} type={type} id={id} {...rest} />
    </>
  );
}
