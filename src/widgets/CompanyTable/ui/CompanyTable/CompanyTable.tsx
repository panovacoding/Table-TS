import {Table} from "@/shared/ui/Table";
import {TableData} from '../../config/tableData.ts';
import {TableConfigData} from "@/widgets/CompanyTable/config/TableConfig.ts";


export const CompanyTable = () => {
  return (
    <Table config={TableConfigData} data={TableData}/>
  )
}