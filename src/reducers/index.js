const initialState = {
  items: [
    // {
    //   name: '',
    //   price: 0
    // }
  ],
  total: 0
}
export default (state = initialState, action) => {
  switch (action.type){
    case 'ADD_ITEM':
      return {...state, items: [...state.items, { name: action.name, price: action.price }], total: state.total + action.price}
    case 'REMOVE_ITEM':
      return {...state, items: state.items.filter((_,index) => index !== action.index), total: state.total - state.items[action.index].price}
    default:
      return state
  }
}
