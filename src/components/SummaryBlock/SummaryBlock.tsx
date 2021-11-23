import { FC } from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../store/selectors/selectors";

export const SummaryBlock: FC = () => {
  const totalPrice = useSelector(getTotalPrice)
  return (
    <div>Summary ${totalPrice.toFixed(2)}</div>
  )
}