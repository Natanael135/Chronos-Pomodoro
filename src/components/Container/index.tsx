import React from "react";
import Styles from "./styles.module.css";

type ContainerProps = {
  children: React.ReactNode;
};
export default function Container({ children }: ContainerProps) {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>{children}</div>
    </div>
  );
}
