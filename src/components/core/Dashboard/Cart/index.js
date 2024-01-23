import { useSelector } from "react-redux/es/hooks/useSelector";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

export default Cart = () => {
  const { totalItems, total } = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Your Cart</h1>
      <p>{totalItems} courses in cart </p>
      {total > 0 ? (
        <div>
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <p>Your Cart is Empty</p>
      )}
    </div>
  );
};
