import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { CartItem } from "../CartItem/CartItem";
import { getCartItems } from "../../store/selectors/selectors";
import s from "./Cart.module.scss";


export const Cart: FC = () => {
  const cartItems = useAppSelector(getCartItems);
  return (
    <>
      {
        cartItems.length === 0
          ? <p className={s.emptyCart}>Cart is empty, please add items</p>
          : <div>
            {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
          </div>
      }
    </>
  );
};