import classes from './BillDetail.module.css';

const BillDetail = (props) => {
  const price = `${props.price.toLocaleString('vi-VN')} VND`;
  return (
    <li className={classes['cart-item']}>
      <div>
      <h2 style={{ fontWeight: 'bold',  fontSize: '2.5vw'}}>{props.name}</h2>
        <div className={classes.summary}> 
          <span style={{  fontSize: '2vw'}} className={classes.price}>{price}&ensp;&ensp;&ensp;
          <span style={{  fontSize: '1.5vw'}} className={classes.amount}>{props.amount}</span>&emsp;&emsp;
          <span style={{ fontWeight: 'bold', fontSize: '2.5vw'}} className="tong">{(props.price*props.amount).toLocaleString('vi-VN')}VND</span>
          </span>  
        </div>
      </div>
    </li>
  );
};

export default BillDetail;

