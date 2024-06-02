import { useContext, useEffect, useRef } from 'react';
import './Form.scss';
import { SettingsContext } from '../../context/SettingsContext';

export const Form = () => {

  const {
    first, handleChangeFirst,
    second, handleChangeSecond,
    third, handleChangeThird,
    fourth, handleChangeFourth,
    username, handleChangeUsername
  } = useContext(SettingsContext);

  const inputFirstRef = useRef<HTMLInputElement>(null);
  const inputSecondRef = useRef<HTMLInputElement>(null);
  const inputThirdRef = useRef<HTMLInputElement>(null);
  const inputFourthRef = useRef<HTMLInputElement>(null);

  const inputHolderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (first.length === 4) && inputSecondRef.current?.focus();
    (second.length === 4) && inputThirdRef.current?.focus();
    (third.length === 4) && inputFourthRef.current?.focus();
    (fourth.length === 4) && inputHolderRef.current?.focus();
  }, [first, second, third, fourth])

  return (
    <div className="form">
      <p className="form__label">Card number</p>
      <div className="input__container">
        <input className="input" type="text" onChange={handleChangeFirst} value={first} ref={inputFirstRef} />
        <input className="input" type="text" onChange={handleChangeSecond} value={second} ref={inputSecondRef} />
        <input className="input" type="text" onChange={handleChangeThird} value={third} ref={inputThirdRef} />
        <input className="input" type="text" onChange={handleChangeFourth} value={fourth} ref={inputFourthRef} />
      </div>
      <p className="form__label">Card holder</p>
      <input className="input holder" type="text" ref={inputHolderRef} onChange={handleChangeUsername} value={username} />
      <button className="button">Submit</button>
    </div>
  )
}