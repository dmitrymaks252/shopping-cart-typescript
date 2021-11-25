import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

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

