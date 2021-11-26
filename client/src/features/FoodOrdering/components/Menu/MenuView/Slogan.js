import classes from './Slogan.module.css';
import { LoginContext } from '../../../../SharedComponent/LoginContext';

const Banner = () => {
  return (
    <LoginContext.Consumer>
      {data => ( 

        <section className={classes.summary}>
          <h2>{data.lang === "vi" ? "Tinh hoa ẩm thực Aprycot" : "Aprycot Restaurant"}</h2>
          <p>
            {data.lang === "vi" ? "Ngon nhất Châu Âu - tính tiền Châu Á" : "Hasty and Nasty !"}
          </p>
        </section>
      )}


    </LoginContext.Consumer>

  );
};

export default Banner;