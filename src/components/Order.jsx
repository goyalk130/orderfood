import React from 'react'
import { useSelector } from 'react-redux'
import OrderHistoryCom from './OrderHistoryCom'

const Order = () => {
    const history = useSelector(store=>store.history)
    console.log(  history.length)
  return (
    <div>
    {history.length != 0 ? <div>
      {history.map((item,val)=>{
        return (<OrderHistoryCom item={item} key={val}  />)
      })}
    </div> : <div className=''> <h1> No Order history</h1> </div>}
    </div>
  )
}

export default Order