import { FC, useEffect } from "react";
import { Cart } from "../../components/Cart/Cart";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { SummaryBlock } from "../../components/SummaryBlock/SummaryBlock";
import s from "./ShoppingCartPage.module.scss";
import { getLoadingStatus } from "../../store/selectors/selectors";
import { loadProducts } from "../../store/actions/actions";
import { AddNewItemForm } from "../../components/AddNewItemForm/AddNewItemForm";

const ShoppingCartPage: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getLoadingStatus);
  useEffect(() => dispatch(loadProducts()), [dispatch]);
  return (
    <>
      <h1 className={s.header}>Shopping cart</h1>
      {
        isLoading
          ? <p className={s.loading}>Loading...</p>
          : <div className={s.mainPart}>
            <Cart/>
            <div className={s.totalAndForm}>
              <SummaryBlock/>
              <AddNewItemForm/>
            </div>
          </div>
      }
    </>
  );

};


export default ShoppingCartPage;
