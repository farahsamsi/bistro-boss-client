import Cover from "../../../SharedComponents/Cover";
import MenuItem from "../../../SharedComponents/MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="mt-11">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  img: PropTypes.string,
};

export default MenuCategory;
