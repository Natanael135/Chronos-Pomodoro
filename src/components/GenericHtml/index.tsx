import React from "react";
import Styles from "./styles.module.css";

type GenericHtmlProps = {
  children: React.ReactNode;
};

export default function GenericHtml({ children }: GenericHtmlProps) {
  return (
    <>
      <div className={Styles.genericHtml}>{children}</div>
    </>
  );
}
