import { ActionTypes, actionTypes } from "../types";

export const loadProducts = (): ActionTypes => ({
  type: actionTypes.LOAD_PRODUCTS
})

export const changeQuantity = (payload: {id: number, quantityChanger: number}): ActionTypes => ({
  type: actionTypes.CHANGE_QUANTITY,
  payload
});

export const deleteProduct = (payload: {id: number}): ActionTypes => ({
  type: actionTypes.DELETE_PRODUCT,
  payload
})

