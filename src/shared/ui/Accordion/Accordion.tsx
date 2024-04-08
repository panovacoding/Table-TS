import clsx from 'clsx'

import {IconDropDownArrow} from "../../../assets/Icons/IconDropDownArrow/index.jsx"
import style from './Accordion.module.scss'
import {useState} from "react";
import {Element} from "./Element";

/**
 * Для кастомизации компонента, можно как точечено использовать классы на каждом узле, либо создать полностью новую тему,
 * через theme.
 * Чтобы работали вложенные раскрывающиеся списик нужно передать в обьекте дополнительный ключ isAccordion, тогда данные
 * из массива items отреднерятся дальше.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const Accordion = (props) => {
  const {
    title,
    wrapperClass,
    headerClass,
    bodyClass,
    items = [],
    theme,
  } = props;

  const [isOpened, setIsOpened] = useState(false);

  const toggleOpened = () => setIsOpened(prevState => !prevState);

  return (
    <div className={clsx(style.AccordionItem, wrapperClass, style[theme])}>

      <div className={clsx(style.header, headerClass)} onClick={toggleOpened}>
        <span className={style.title}>{title}</span>
        <IconDropDownArrow className={clsx(style.icon, isOpened && style.arrow_rotate)}/>
      </div>

      <div className={clsx(style.body, bodyClass, isOpened && style.isVisible)}>
        {items?.map(({title, items, data, isAccordion}, index) => (
          <div key={index} className={style.item}>
            {isAccordion
              ? <Accordion title={title} items={items} theme={'innerItemTheme'}/>
              : <Element title={title} data={data}/>
            }
          </div>
        ))}
      </div>

    </div>
  )
}
