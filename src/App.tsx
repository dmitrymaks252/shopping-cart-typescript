import React, { FC, useEffect } from "react";
import { Cart } from "./components/Cart/Cart";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { actionTypes } from "./store/types";
import { SummaryBlock } from "./components/SummaryBlock/SummaryBlock";
import s from "./App.module.scss";
import { getLoadingStatus } from "./store/selectors/selectors";
import { loadProducts } from "./store/actions/actions";
import { AddNewItemForm } from "./components/AddNewItemForm/AddNewItemForm";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getLoadingStatus);
  useEffect(() => dispatch(loadProducts()), []);
  return (
    <div>
      <h1 className={s.header}>Shopping cart</h1>
      {
        isLoading
          ? <p>Loading...</p>
          : <div className={s.mainPart}>
            <Cart/>
            <SummaryBlock/>
          </div>
      }
      <AddNewItemForm/>
    </div>
  );

};


export default App;
