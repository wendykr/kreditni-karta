import { useContext, useEffect, useRef } from 'react';
import './FormRow.scss'
import { SettingsContext } from '../../context/SettingsContext';
import { Input } from '../Input/Input';

interface FormRowProps {
  title: string;
}

export const FormRow = ({ title }: FormRowProps) => {

  const inputFirstRef = useRef<HTMLInputElement>(null);
  const inputSecondRef = useRef<HTMLInputElement>(null);
  const inputThirdRef = useRef<HTMLInputElement>(null);
  const inputFourthRef = useRef<HTMLInputElement>(null);

  const inputHolderRef = useRef<HTMLInputElement>(null);

  const {
    first, handleChangeFirst,
    second, handleChangeSecond,
    third, handleChangeThird,
    fourth, handleChangeFourth,
    username, handleChangeUsername
  } = useContext(SettingsContext);

  useEffect(() => {
    if (first.length === 4 && second.length === 0) {
      inputSecondRef.current?.focus();
    } else if (second.length === 4 && third.length === 0) {
      inputThirdRef.current?.focus();
    } else if (third.length === 4 && fourth.length === 0) {
      inputFourthRef.current?.focus();
    } else if (first.length === 4 && second.length === 4 && third.length === 4 && fourth.length === 4) {
      inputHolderRef.current?.focus();
    }
  }, [first, second, third, fourth]);

  return (
    <div className="formRow">
      <label className="formRow__label">
        <span className="formRow__label--title">
          {
            title === 'Card number' ? 'Card number' : 'Card holder'
          }
        </span>
        <div className="formRow__container">
          {
            title === 'Card number' ?
            <>
              <Input
                ref={inputFirstRef}
                onChange={handleChangeFirst}
                value={first}
                number
              />
              <Input
                ref={inputSecondRef}
                onChange={handleChangeSecond}
                value={second}
                number
              />
              <Input
                ref={inputThirdRef}
                onChange={handleChangeThird}
                value={third}
                number
              />
              <Input
                ref={inputFourthRef}
                onChange={handleChangeFourth}
                value={fourth}
                number
              />
            </>
            :
            <Input
              ref={inputHolderRef}
              onChange={handleChangeUsername}
              value={username}
            />
          }
        </div>
      </label>
    </div>
  )
}