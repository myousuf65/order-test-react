import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerOrder from './components/CustomerOrder';
import { PetOrder } from './components/PetOrder';

function App() {
  
  const [data, setData] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:5050/pending-customer')
      .then(res => res.json())
      .then(fetched => setData(fetched))
  },[])

  return (

  <div>
      <nav className="nav">
        <Link className="nav-link" to={"/create-customer"}>
          Pending Customer Orders
        </Link>
        <Link className="nav-link" to={"/create-pet"}>
          Pending Pet Orders
        </Link>
      </nav>

      <h2>All Pending Customer Specimen Orders</h2>

    {
      data.map((item)=>{
         return <CustomerOrder details={item} />
        })
    }
  </div>

  );
}

export default App;
