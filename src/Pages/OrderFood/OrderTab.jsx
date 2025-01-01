import FoodCard from "../../SharedComponents/FoodCard";
import PropTypes from "prop-types";

const OrderTab = ({ items }) => {
  return (
    <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.object,
};

export default OrderTab;
