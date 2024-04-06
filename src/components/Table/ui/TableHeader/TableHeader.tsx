import {TableConfig} from "../../types/type.ts";

interface TableHeaderProps {
  config: TableConfig,
}
export const TableHeader = (props: TableHeaderProps) => {
 const {config} = props;

  return (
    <thead>
      {config?.cells.map(el => (<th>{el.name}</th>))}
    </thead>
  )
}