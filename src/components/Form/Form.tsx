import { useEffect, useRef, useState } from 'react';
import './Form.scss';

export const Form = () => {
  const [first, setFirst] = useState<string>('');
  const [second, setSecond] = useState<string>('');
  const [third, setThird] = useState<string>('');
  const [fourth, setFourth] = useState<string>('');

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

  const handleChangeFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
    (/[0-9]/.test(event.target.value.trim())) && setFirst(event.target.value);
  }

  const handleChangeSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
    (/[0-9]/.test(event.target.value.trim())) && setSecond(event.target.value);
  }

  const handleChangeThird = (event: React.ChangeEvent<HTMLInputElement>) => {
    (/[0-9]/.test(event.target.value.trim())) && setThird(event.target.value);
  }

  const handleChangeFourth = (event: React.ChangeEvent<HTMLInputElement>) => {
    (/[0-9]/.test(event.target.value.trim())) && setFourth(event.target.value);
  }

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
      <input className="input holder" type="text" ref={inputHolderRef} />
      <button className="button">Submit</button>
    </div>
  )
}