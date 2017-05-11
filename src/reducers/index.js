const initialState = {
  items: [
    // {
    //   name: '',
    //   price: 0
    // }
    {qty: 0}
  ],
  total: 0
}
export default (state = initialState, action) => {
  switch (action.type){
    case 'ADD_ITEM':
      return {...state, items: [...state.items, { name: action.name, price: action.price, qty: 1}], total: state.total + action.price}
    case 'REMOVE_ITEM':
      return {...state, items: state.items.filter((_,index) => index !== action.index), total: state.total - (state.items[action.index].qty * state.items[action.index].price)}
    case 'QTY_INCREASE':
      return {...state, items: state.items.map((item,index) => {
        if (index === action.index){
          return{...item, qty: item.qty + 1}
        }else{ return item }
        }
      ), total: state.total + state.items[action.index].price}
    case 'QTY_DECREASE':
      if (state.items[action.index].qty===1){
        return {...state, items: state.items.filter((_,index) => index !== action.index), total: state.total - (state.items[action.index].qty * state.items[action.index].price)}
      }else{
        return {...state, items: state.items.map((item,index) => {
          if (index === action.index){
            return{...item, qty: item.qty - 1}
          }else{ return item }
          }
        ), total: state.total - state.items[action.index].price}
      }
    default:
      return state
  }
}
