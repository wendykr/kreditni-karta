import './Form.scss';
import { Button } from '../Button/Button';
import { FormRow } from '../FormRow/FormRow';

export const Form = () => {

  return (
    <div className="form">
      <FormRow title="Card number" />
      <FormRow title="Card holder" />
      <Button />
    </div>
  )
}