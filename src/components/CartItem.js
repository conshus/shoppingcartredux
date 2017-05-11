import React from 'react'
import inventory from '../assets/inventory'
const CartItem = ({ items, total, addItem, removeItem, qtyIncrease, qtyDecrease }) => (
  <div>
    <div className="row">
      {inventory.items.map((item,index) => (
        <div key={index} className="col s12 m3">
          <img className="responsive-img" src={item.image} alt="shirt"/><br />
          {item.name} - ${item.price} &nbsp;<br/>
          <button className="waves-effect waves-light btn" onClick={addItem.bind(null,item.name,item.price)}>Add To Cart</button>
        </div>))}
        <div className="col s12 m3">
          <h1>Cart</h1>
          <ul>
            {items.map((item,index) => (
              item.name ?
              <li key={index}>[ <a onClick={qtyIncrease.bind(null,index)}>^</a> ][ <a onClick={qtyDecrease.bind(null,index)}>v</a> ] {item.name} - {item.qty}x ${item.price} [ <a onClick={removeItem.bind(null,index)}>X</a> ]</li>
              : null
            ))}
          </ul>
          Total: ${total}
        </div>
    </div>
  </div>
)
export default CartItem
