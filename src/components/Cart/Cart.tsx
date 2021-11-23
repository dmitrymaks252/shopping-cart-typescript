import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { CartItem } from "../CartItem/CartItem";
import { getCartItems } from "../../store/selectors/selectors";


export const Cart: FC = () => {
  const cartItems = useAppSelector(getCartItems);
  return (
    <div>
      {
        cartItems.length === 0
          ? <p>Cart is empty, please add items</p>
          : cartItems.map(item => <CartItem key={item.id} item={item}/>)
      }
    </div>
  );
};