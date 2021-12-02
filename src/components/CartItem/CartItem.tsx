import { CartProductType } from "../../store/types";
import { FC } from "react";
import s from './CartItem.module.scss'
import { useAppDispatch } from "../../hooks/hooks";
import { changeQuantity, deleteProduct } from "../../store/actions/actions";

type PropsType = {
item: CartProductType
}

export const CartItem: FC<PropsType> = ({item}) => {
  const dispatch = useAppDispatch()

  const handleIncrement = () => {
    dispatch(
      changeQuantity({id: item.id, quantityChanger: 1})
    )
  }
  const handleDecrement = () => {
    dispatch(
      changeQuantity({id: item.id, quantityChanger: -1})
    )
  }
  const handleRemove = () => {
    dispatch(
      deleteProduct({id: item.id})
    )
  }

  if(!item) return null
  return (
    <div className={s.CartItemCard}>
      <img src={item.imgUrl} alt={item.name}/>
      <div>
        <h3 className={s.HeaderTitle}>{item.name}</h3>
        <p>Price: {item.price}$ </p>
        <p>Subtotal: {(item.price * item.quantity).toFixed(2)}$</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
      <div>
        <button disabled={item.quantity === 1} onClick={handleDecrement}>-</button>
        <p>{item.quantity}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};