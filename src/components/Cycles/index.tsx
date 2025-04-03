import Styles from "./styles.module.css";

export default function Cycles() {
  return (
    <>
      <div className={Styles.cycles}>
        <span>Ciclos:</span>
        <div className={Styles.cycleDots}>
          <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
          <span className={`${Styles.cycleDot} ${Styles.sortBreakTime}`}></span>
          <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
          <span className={`${Styles.cycleDot} ${Styles.sortBreakTime}`}></span>
          <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
          <span className={`${Styles.cycleDot} ${Styles.sortBreakTime}`}></span>
          <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
          <span className={`${Styles.cycleDot} ${Styles.longBreakTime}`}></span>
        </div>
      </div>
    </>
  );
}
