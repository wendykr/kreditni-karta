import { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import './Button.scss';

export const Button = () => {

  const { handleClickClear } = useContext(SettingsContext);

  return (
    <button className="button" onClick={handleClickClear}>Clear</button>
  )
}