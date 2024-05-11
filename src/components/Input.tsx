// components/Input.tsx
import { FC } from "react";

interface InputProps {
  type?: "text" | "password" | "email" | "number" | "date" | "datetime-local";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
    />
  );
};

export default Input;
