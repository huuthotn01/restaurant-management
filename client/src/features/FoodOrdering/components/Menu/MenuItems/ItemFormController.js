import { useRef, useState } from 'react';

import Input from './Input';
import classes from './ItemFormController.module.css';
import { LoginContext } from '../../../../SharedComponent/LoginContext';

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
    <LoginContext.Consumer>
      {data => ( 
        <form className={classes.form} onSubmit={submitHandler}>
          <Input
            ref={amountInputRef}
            label={data.lang === "vi" ? "Số lượng" : "Amount"}
            input={{
              id: 'amount_' + props.id,
              type: 'number',
              min: '1',
              max: '100',
              step: '1',
              defaultValue: '0',
            }}
          />
          <button>{data.lang === "vi" ? "Thêm" : "Add"}</button>
          {!amountIsValid && <p>Vui lòng nhập số lượng</p>}
        </form>
      )}


    </LoginContext.Consumer>

  );
};

ItemForm.contextType = LoginContext;
export default ItemForm;
