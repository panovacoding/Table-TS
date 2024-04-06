import {TableDataList} from "@/widgets/CompanyTable/types/type.ts";
import {TableConfig} from "@/shared/ui/Table/types/type.ts";

export const TableConfigData: TableConfig<TableDataList> = {
  cells: [
    {
      name: 'Full Name',
      data: 'name',
    },
    {
      name: 'Short Name',
      data: 'short',
    },
    {
      name: 'Current Price',
      data: 'price',
    },
  ]
}