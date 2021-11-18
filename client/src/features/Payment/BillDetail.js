import classes from './BillDetail.module.css';

const BillDetail = (props) => {
  const price = `${props.price.toFixed(0)} VND`;
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}> 
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>{props.amount}</span>
        </div>
      </div>
      <div className={classes.total}>
          {/* <span className={classes.price}> Giá </span> */}
          <span>{props.price*props.amount} VND</span>
        </div>
    </li>
  );
};

export default BillDetail;
