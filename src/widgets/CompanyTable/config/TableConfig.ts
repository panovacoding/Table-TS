import {TableDataList} from "../types/type.ts";
import {TableConfig} from "@/shared/ui/Table/types/type.ts";

export const TableConfigData: TableConfig<TableDataList> = {
  cells: [
    {
      name: 'Full Name',
      data: 'name',
      width: '500px'
    },
    {
      name: 'Short Name',
      data: 'short',
    },
    {
      name: '',
      data: 'additional'
    },
    {
      name: 'Current Price',
      data: 'price',
    },
  ]
}