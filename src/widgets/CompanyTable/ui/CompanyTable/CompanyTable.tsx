import {Table} from "@/shared/ui/Table";
import {TableData} from '../../config/tableData.ts';
import {TableConfigData} from "@/widgets/CompanyTable/config/TableConfig.ts";
import cls from './CompanyTable.module.scss';

export const CompanyTable = () => {
  return (
    <Table
      config={TableConfigData}
      data={TableData}
      classNames={cls.Table}
    />
  )
}