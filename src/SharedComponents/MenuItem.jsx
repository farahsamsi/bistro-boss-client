import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex space-x-4">
      <img
        src={image}
        alt={name}
        className="w-[120px] rounded-r-[200px] rounded-bl-[200px]"
      />
      <div>
        <h3 className="uppercase">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
};

export default MenuItem;
