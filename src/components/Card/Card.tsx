import './Card.scss'
import emvChip from '/emv-chip.svg';
import { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import { getCardLogo } from '../../helpers/getCardLogo';

export const Card = () => {

  const { first, second, third, fourth, username } = useContext(SettingsContext);

  return (
    <div className="card">
      <div className="card__header">
        <p className="card__header--right">
          {
            getCardLogo(first)
          }
        </p>
        <p className="card__header--left"><img className="chip" src={emvChip} /></p>
      </div>
      <p className="card__context">
        <span>{first}</span>
        <span>{second}</span>
        <span>{third}</span>
        <span>{fourth}</span>
      </p>
      <div className="card__footer">
        <div className="card__left">
          <p className="card__footer--title">Card holder</p>
          <p className="card__row username">{username}</p>
        </div>
        <div className="card__right">
          <p className="card__footer--title">Expires</p>
          <p className="card__row">
            {
              (first.length === 4 && second.length === 4 && third.length === 4 && fourth.length === 4) && '08/25'
            }
          </p>
        </div>
      </div>
    </div>
  )
}