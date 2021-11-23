import { RootState } from "../store";
import { CartProductType } from "../types";

export const getCartItems = (store: RootState): Array<CartProductType> => store.data
export const getLoadingStatus = (store: RootState): boolean => store.isLoading
