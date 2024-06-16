import {TableDataList} from "../types/type.ts";
import {TableConfig} from "@/shared/ui/Table/types/type.ts";

export const TableConfigData: TableConfig<TableDataList> = {
  cells: [
    {
      name: 'Компания',
      data: 'name',
      width: '300px'
    },
    {
      name: 'Тикер',
      data: 'ticker',
    },
    {
      name: 'Цена, ₽',
      data: 'price',
    },
  ]
}