import {TableConfig} from "../../types/type.ts";
import cls from "./TableHeader.module.scss";

interface TableHeaderProps<T> {
  config: TableConfig<T>,
}
export const TableHeader =<T,>(props: TableHeaderProps<T>) => {
 const {config} = props;

  return (
    <thead>
      {config?.cells.map(el => (<th className={cls.header_th}>{el.name}</th>))}
    </thead>
  )
}