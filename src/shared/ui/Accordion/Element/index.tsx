import style from "../Accordion.module.scss";

export const Element = ({title, data}) => {
  return (
    <>
      <span className={style.item_title}>{title}</span>
      <span>{data}</span>
    </>
  )
}