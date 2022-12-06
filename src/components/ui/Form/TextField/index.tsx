import { InputHTMLAttributes } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type: "email" | "password" | "text" | "number";
  rules?: RegisterOptions;
  errorMessage?: string;
  containerStyle?: string;
  /* eslint-disable no-unused-vars */
  icon?(props: React.ComponentProps<"svg">): JSX.Element;
}

export default function TextField({
  label,
  name,
  placeholder,
  type,
  className,
  errorMessage,
  containerStyle,
  rules = {},
  icon: Icon,
  ...props
}: TextFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={containerStyle}>
      {label && (
        <label className="text-gray-500" htmlFor={name}>
          {label}
        </label>
      )}

      <div className="flex  items-center relative">
        <input
          type={type}
          {...register(name, rules)}
          placeholder={placeholder}
          className={`  block w-full px-4 py-2 my-1 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none focus:bg-white focus:ring-2 focus:border-0 focus:ring-primary/40 ${className} ${
            errors[name] ? "border-danger" : "border-gray-300"
          } ${Icon && "pl-12"}`}
          {...props}
        />
        {Icon && <Icon className="absolute ml-2 w-8" color="gray" />}
      </div>

      {errors[name] && <ErrorMessage name={name} />}
    </div>
  );
}
