import {TableConfig} from "../../types/type.ts";
import cls from "./TableHeader.module.scss";

interface TableHeaderProps<T> {
  config: TableConfig<T>,
}
export const TableHeader =<T,>(props: TableHeaderProps<T>) => {
 const {config} = props;

  return (
    <thead>
      {config?.cells.map((el, index) => (
        <th
          key={index}
          className={cls.header_th}
          style={{backgroundColor: `${el?.bgColor}`, width: `${el?.width}`}}
        >{el.name}</th>))}
    </thead>
  )
}