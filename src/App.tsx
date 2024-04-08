import './App.css'
import {CompanyTable} from "@/widgets/CompanyTable";
import {Accordion} from "@/shared/ui/Accordion"
import {xCascoItems, xStartItems} from "@/shared/lib/accrodionItems.ts";
function App() {
  return (
    <>
      <h1>Table</h1>
      <CompanyTable/>

      <Accordion title={'X-cross'} items={xStartItems}/>
      <Accordion title={'X-CASCO'} items={xCascoItems}/>
    </>
  )
}

export default App
