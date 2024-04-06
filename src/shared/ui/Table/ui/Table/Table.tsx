import {TableHeader} from "../TableHeader/TableHeader.tsx";
import {TableBody} from "../TableBody/TableBody.tsx";

import cls from './Table.module.scss';
import {TableConfig} from "../../types/type.ts";

interface TableData {
  [key: string]: any;
}

interface TableProps<T> {
  config: TableConfig<T>,
  data: T[]
}

export const Table =  <T extends TableData>(props: TableProps<T>) => {
  const {config, data} = props;

  return (
    <table className={cls.Table}>
      <TableHeader config={config}/>
      <TableBody data={data} config={config} />
    </table>
  )
}