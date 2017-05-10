import React from 'react'
import inventory from '../assets/inventory'
{console.log(inventory.items)}
const CartItem = ({ items, total, addItem, removeItem }) => (
  //console.log(items)
  <div>
    <div className="row">
      {inventory.items.map(item => (
        <div className="col s12 m3">
          <img className="responsive-img" src={item.image}/><br />
          {item.name} - ${item.price} &nbsp;<br/>
          <button className="waves-effect waves-light btn" onClick={addItem.bind(null,item.name,item.price)}>Add To Cart</button>
        </div>))}
        <div className="col s12 m3">
          <h1>Cart</h1>
          <ul>
            {items.map((item,index) => (
              // <li>[ <a onClick={addItem.bind(null,item.name,item.price)}>^</a> ][ <a>v</a> ]{item.name} - ${item.price} [ <a onClick={removeItem.bind(null,index)}>X</a> ]</li>
              <li>[ <a>^</a> ][ <a>v</a> ] {item.name} - ${item.price} [ <a onClick={removeItem.bind(null,index)}>X</a> ]</li>
            ))}
          </ul>
          Total: ${parseInt(total)}
          {console.log(total)}
        </div>
    </div>
  </div>
)

export default CartItem
