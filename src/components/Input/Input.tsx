import './Input.scss'
import { forwardRef } from "react";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  number? :boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ onChange, value, number }, ref) => {

  return (
    <input
      className={`input ${number ? 'number' : ''}`}
      type="text"
      ref={ref}
      onChange={onChange}
      value={value}
      maxLength={number ? 4 : undefined}
    />
  )
})