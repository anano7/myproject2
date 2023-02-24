//import logo from './logo.svg';
import './App.css';
import Employee from './component/employee';
import {useState} from 'react'; 
//useState is an example of hook. hook-is bevri magalitebia sxva.  aris roca funqciashi classebis gamoyenebas viridebt tavidan da ufro martivdeba funqcia. more examples lately...:)

function App() {
  const [role, setRole]=useState('dev');

  const showEmployee=true;
  return (
    <div className="App bg-red-300">
      {showEmployee ? 
        <>
        <input type="text"
        onChange={(e)=>{
          console.log(e.target.value);
          setRole(e.target.value);
        }}
         />
          <Employee name='ana' role='intern'/>
          <Employee name='keti' role={role} />
          <Employee name='nika' />
          
         
        </>
        :
        <p>an employee is not correct</p>
       }
    </div>
  )
}

export default App;
