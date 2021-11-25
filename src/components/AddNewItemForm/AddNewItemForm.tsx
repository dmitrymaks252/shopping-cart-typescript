import { FC } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { useAppDispatch } from "../../hooks/hooks";
import { FormValuesType } from "../../store/types";
import { addProduct } from "../../store/actions/actions";


export const AddNewItemForm: FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    reset,
    handleSubmit,
    formState: {errors}
  } = useForm<FormValuesType>();

  const onSubmit = (data: FormValuesType) => {
    dispatch(addProduct(data))
    reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        {errors.name && (<span>Field is required </span>)}
        <Input
          label={"name"}
          type={"string"}
          required
          register={register}
        />
      </label>
      <label>
        {errors.price?.type === "required"
          ? (<span>Field is required</span>)
          : errors.price?.type === "min"
            ? <span>Price cannot be below zero</span>
            : errors.price?.type === 'max'
              ? <span>Maximum number length is 10 digits</span>
              : null
        }
        <Input
          type={"number"}
          label={"price"}
          required
          register={register}
        />
      </label>

      <label>
        {errors.quantity?.type === "required"
          ? <span>Field is required</span>
          : errors.quantity?.type === "min"
            ? <span>Quantity cannot be below zero</span>
            :  errors.quantity?.type === "max"
              ? <span>Maximum number length is 10 digits</span>
              : null
        }
        <Input
          type={"number"}
          label={"quantity"}
          required
          register={register}
        />
      </label>

      <input type="submit"/>
    </form>
  );
};