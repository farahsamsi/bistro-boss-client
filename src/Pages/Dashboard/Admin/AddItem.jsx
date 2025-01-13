import { useForm } from "react-hook-form";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import { FaUtensils } from "react-icons/fa6";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle
        heading="Add an item"
        subHeading="what's new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name *</span>
            </div>
            <input
              {...register("name")}
              required
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>
          <div className="grid grid-cols-2 gap-6">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category *</span>
              </div>
              <select
                {...register("category")}
                required
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price *</span>
              </div>
              <input
                {...register("price")}
                required
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Full Recipe</span>
            </div>
            <textarea
              {...register("recipe")}
              required
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>

          {/* file input */}
          <div className="form-control w-full my-6">
            <input
              {...register("image")}
              required
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
