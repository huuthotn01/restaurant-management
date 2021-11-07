import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './ItemForm.module.css';

const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

const submitHandler = (event) => {
  event.preventDefault();

  const enteredAmount = amountInputRef.current.value;
  const enteredAmountNumber = +enteredAmount;

  if (
    enteredAmount.trim().length === 0 ||
    enteredAmountNumber < 1 ||
    enteredAmountNumber > 100
  ) 
  {
    setAmountIsValid(false);
    return;
  }

  props.onAddToCart(enteredAmountNumber);
};

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Số lượng'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '100',
          step: '1',
          defaultValue: '0',
        }}
      />
      <button>Thêm</button>
      {!amountIsValid && <p>Vui lòng nhập số lượng</p>}
    </form>
  );
};

export default ItemForm;
