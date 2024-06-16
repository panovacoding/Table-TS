import {Table} from "@/shared/ui/Table";
import {TableData} from '../../config/tableData.ts';
import {TableConfigData} from "../../config/tableConfig.ts";
import cls from './NewTable.module.scss';

export const NewTable = () => {
  return (
    <Table 
      config={TableConfigData} 
      data={TableData} 
      classNames={cls.Table} />
  )
}