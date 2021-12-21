import { FC } from "react";
import { useSelector } from "react-redux";

import { getTotalPrice } from "../../store/selectors/selectors";

import s from "./SummaryBlock.module.scss";

export const SummaryBlock: FC = () => {
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div className={s.summary}>
      <h3>Total price:</h3>
      <p>${totalPrice.toFixed(2)}</p>
      <button disabled={totalPrice === 0} className={s.checkoutBtn}>Proceed to Checkout</button>
    </div>

  );
};