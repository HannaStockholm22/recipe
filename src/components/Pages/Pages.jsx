
import { RandDish } from "../RandDish/RandDish";

export const Pages = ({updateBasket,api2}) => {
  return (
    <div>
      <RandDish updateBasket={updateBasket} api2={api2}/>
    </div>
  );
};
