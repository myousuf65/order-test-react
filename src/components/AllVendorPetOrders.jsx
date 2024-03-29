import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CustomerTopNav from './CustomerTopNav'
import { PetOrder } from './PetOrder'

export const AllVendorPetOrders = () => {
  const [data, setData] = useState([])
  const [cancelled, setCancelled] = useState(true)

  useEffect(()=>{
    const username = encodeURIComponent('YUENG PO')
    fetch(`https://${process.env.REACT_APP_ENDPOINT}/vendor/pet`)
      .then(res => res.json())
      .then(fetched => setData(fetched))
  },[cancelled])

  function handleCancel(order_id){
    fetch(`https://${process.env.REACT_APP_ENDPOINT}/${order_id}`)
      .then(res => res.json())
      .then(data => {
        setCancelled(!cancelled)
        console.log(data)
      })

  } 

  return (

    <div>

      <CustomerTopNav />

      <nav className="nav">
        <Link className="nav-link" to={"/user/customer/history"}>
          客户订单
        </Link>
        <Link className="nav-link" to={"/user/pet/history"}>
          宠物订单
        </Link>

        <input style={{width: "50%"}} type="text" placeholder="Search.."/>
      </nav>

      <h2> 宠物订单历史</h2>

      {
        data.map((item)=>{
          return <PetOrder handleCancel={handleCancel} details={item} />
        })
      }
    </div>

  );
}
