// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import { states_Capital } from './Data';

function App() {

  const [Search, setSearch] = useState('')

  const [State, setState] = useState(states_Capital)

  useEffect(() => {
    let filteredData = states_Capital.filter(i=>((i.state)?.toLowerCase())?.includes(Search?.toLowerCase()))
    setState(filteredData)
  }, [Search]);

  return (
   <div >

      
      <center><h2>Adigwerex Kasoludo</h2></center>
      <center><h6>State Repository</h6></center>
       
      <div style={{height:'400px', width:'500px',borderRadius:'10px'}} className='card bg-white p-3'>
        <input placeholder='Search by state' type='search' onChange={(e)=>setSearch(e.target.value)}  />
        <br/>
        <div style={{overflowY:'auto'}} className='p-2'>
          {State.length>0?(
            <div>
              {State.map(i=>(
                <div className="d-flex flex-row mb-2 justify-content-between border-bottom ">
                  <h5>{i.state}</h5>
                  <p>{i.capital}</p>
                </div>
              ))}
            </div>
          ):(
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
              <h3>Not found</h3>
            </div>
          )}
        </div>
        
      </div>
   </div>
  );
}

export default App;