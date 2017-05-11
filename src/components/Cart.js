import { connect } from 'react-redux';
import CartItem from './CartItem';

const mapStateToProps = (state) => {
  return  {
    items: state.items,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (name,price) => {dispatch({type:'ADD_ITEM', name: name, price: price})},
    removeItem: (index) => {dispatch({type:'REMOVE_ITEM', index: index})},
    qtyIncrease: (index) => {dispatch({type:'QTY_INCREASE', index: index})},
    qtyDecrease: (index) => {dispatch({type:'QTY_DECREASE', index: index})}
  }
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartItem)

export default Cart;
