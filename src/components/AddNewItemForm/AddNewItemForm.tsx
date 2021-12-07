import { FC } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { useAppDispatch } from "../../hooks/hooks";
import { FormValuesType } from "../../store/types";
import { addProduct } from "../../store/actions/actions";
import s from "./AddNewItemForm.module.scss";


export const AddNewItemForm: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: {errors}
  } = useForm<FormValuesType>();
  const onSubmit = (data: FormValuesType) => {
    dispatch(addProduct(data));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <Input
          label={"name"}
          type={"string"}
          required
          register={register}
        />
        {errors.name && (<p className={s.requiredInput}>Field is required </p>)}
      </label>
      <label>
        Price:
        <Input
          type={"number"}
          label={"price"}
          required
          register={register}
        />
        {errors.price?.type === "required"
          ? <p className={s.requiredInput}>Field is required</p>
          : errors.price?.type === "min"
            ? <p className={s.requiredInput}>Price cannot be below zero</p>
            : errors.price?.type === "max"
              ? <p className={s.requiredInput}>Maximum number length is 10 digits</p>
              : null
        }
      </label>
      <label>
        Quantity:
        <Input
          type={"number"}
          label={"quantity"}
          required
          register={register}
        />
        {errors.quantity?.type === "required"
          ? <p className={s.requiredInput}>Field is required</p>
          : errors.quantity?.type === "min"
            ? <p className={s.requiredInput}>Quantity cannot be below zero</p>
            : errors.quantity?.type === "max"
              ? <p className={s.requiredInput}>Maximum number length is 10 digits</p>
              : null
        }
      </label>
      <button className={s.addNewProductBtn}>Add new item</button>
    </form>
  );
};