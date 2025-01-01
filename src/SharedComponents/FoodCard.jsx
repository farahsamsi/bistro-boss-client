import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  return (
    <div key={item._id} className="card bg-black/5">
      <figure className="relative">
        <p className="bg-slate-900 text-white px-4 py-2 absolute top-5 right-5">
          $ {item.price}
        </p>
        <img src={item.image} alt={item.name} className="object-cover w-full" />
      </figure>
      <div className="card-body items-center text-center ">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn uppercase text-[#BB8506] border-b-2 border-b-[#BB8506]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;
