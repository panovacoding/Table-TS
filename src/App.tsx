import './App.css'
import {Table} from "./components/Table";
import {TableConfig} from "./components/Table/types/type.ts";

export type TableDataNew = {
  name: string;
  shortName: string;
  value: string;
}
const data: TableDataNew[] = [
  {name: 'Apple', shortName: 'AAPL', value: '2TB'},
  {name: 'Microsoft',  value: '2TB', shortName: 'MSFT',},
  {shortName: 'GOOG', value: '2TB', name: 'Google' }
]

const TableConfigData: TableConfig = {
  cells: [
    {
      name: 'Short Name',
      data: 'shortName'
    },
    {
      name: 'Value',
      data: 'value'
    },
    {
      name: 'Company',
      data: 'name'
    },
  ]
}

function App() {
  return (
    <>
      <h1>Table</h1>
      <Table
        <TableDataNew>
        config={TableConfigData}
        data={data}
      />
    </>
  )
}

export default App
