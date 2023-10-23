import React from 'react'

const OrderHistoryCom = ({item}) => {

    let totalprice = 0
    

  for(let i=0;i<item.length;i++){
    totalprice+=item[i].price
  }

  return (
    <>
        <div className='order-com-wrapper'>
            <div>{item.map(item=>{
                return (
                    <div className='orderhistoryitem'>
                    <h3>{item.id}</h3>
                    <h3>{item.name}</h3>
                    <h3>{item.price}</h3>
                    </div>
                )
            })}</div>
            <div className='orderhistoryprice'>
                <div><h3>Total price</h3></div>
                <div>{totalprice}</div>
            </div>
        </div>
    </>
  )
}

export default OrderHistoryCom