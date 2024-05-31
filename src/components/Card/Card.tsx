import './Card.scss'
import logoVisa from '../../../public/logo-visa.svg';

export const Card = () => {
  return (
    <div className="card">
      <p className="card__header">
        <img className="logo" src={logoVisa} />
      </p>
      <p className="card__context">1365 1236 1236 1235</p>
      <div className="card__footer">
        <div className="card__left">
          <p className="card__footer--title">Card holder</p>
          <p className="card__row">Lorem ipsum</p>
        </div>
        <div className="card__right">
          <p className="card__footer--title">Expires</p>
          <p className="card__row">08/25</p>
        </div>
      </div>
    </div>
  )
}