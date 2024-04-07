import {TableHeader} from "../TableHeader/TableHeader.tsx";
import {TableBody} from "../TableBody/TableBody.tsx";
import clsx from "clsx";

import cls from './Table.module.scss';
import {TableConfig} from "../../types/type.ts";

interface TableData {
  [key: string]: any;
}

interface TableProps<T> {
  config: TableConfig<T>;
  data: T[];
  classNames?: string;
}

export const Table =  <T extends TableData>(props: TableProps<T>) => {
  const {config, data, classNames} = props;

  return (
    <table className={clsx(cls.Table, classNames)}>
      <TableHeader config={config}/>
      <TableBody data={data} config={config} />
    </table>
  )
}