import React,{useEffect, useState} from 'react'
import { supabase } from './createClient'

const App = () => {
  
  const [auditlist,setAuditList] = useState([])

  useEffect(()=> {
    fetchAudits();
  },[])
  console.log("auditlist",auditlist);

  async function fetchAudits(){
    const {data} = await supabase
     .from('QualityAuditList')
     .select('*')
     setAuditList(data);
  }


  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Item Name</th>
          <th>Owner</th>
          <th>Status</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {auditlist.map((audit) => (
          <tr key={audit.id}>
            <td>{audit.id}</td>
            <td>{audit.item_name}</td>
            <td>{audit.owner}</td>
            <td>{audit.status}</td>
            <td>{audit.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default App