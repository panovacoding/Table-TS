import {Cells, TableConfig} from "../../types/type.ts";

interface TableData {
  [key: string]: any;
}

interface TableBodyProps<T> {
  data: T[];
  config: TableConfig;
}

export const TableBody =  <T extends TableData>(props: TableBodyProps<T>) => {
  const { data, config } = props

  const orderCell = config.cells.map((el: Cells) => el.data);

  return (
    <tbody>
    {data.map((el, index) => (
      <tr key={index}>
        {orderCell.map((key, innerIndex) => (
          <td key={innerIndex}>{el[key]}</td>
        ))}
      </tr>
    ))}
    </tbody>
  )
}