import { UPDATE_CART_COUNT, ADD_TO_CART_LIST } from "./action";

const initialState = {
  cartCount: 0,
  cartList: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART_COUNT:
      return {
        ...state,
        cartCount: state.cartCount + 1
      };
    case ADD_TO_CART_LIST:
      return {
        ...state,
        cartList: [...state.cartList, action.payload]
      };
    default:
      return state;
  }
}

export default reducer;
