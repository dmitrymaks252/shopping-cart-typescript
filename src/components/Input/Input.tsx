import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import s from './Input.module.scss'
type PropsType = {
  label: string
  type: "string" | "number"
  register: UseFormRegister<FieldValues>
  required: boolean
}

export const Input: FC<PropsType> = ({
                                       label,
                                       type,
                                       register,
                                       required = true
                                     }) => {
  const numberInput = {required, min: 1, max: 1e9, valueAsNumber: true};
  const stringInput = {required};
  return (
    <input
      className={s.inputField}
      placeholder={label}
      type={type}
      {...register(
        label,
        type === "number"
          ? numberInput
          : stringInput
      )}
    />
  );
};

