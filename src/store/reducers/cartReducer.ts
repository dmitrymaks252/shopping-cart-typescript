import { actionTypes, ActionTypes, CartStateType } from "../types";


const initialState: CartStateType = {
  data: [],
  isLoading: false,
  error: null,
  totalPrice: 0
};

export default function cartReducer(state = initialState, action: ActionTypes): CartStateType {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case actionTypes.LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actionTypes.CHANGE_QUANTITY:
      return {
        ...state,
        data: state.data.map(el=>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + action.payload.quantityChanger}
            : el
        )
      }
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        data: state.data.filter(el => el.id !== action.payload.id)
      }
    default:
      return state;
  }
}