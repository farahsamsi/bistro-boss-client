import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa6";

// image hosting
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image
      const menuItem = {
        name: data?.name,
        category: data?.category,
        price: parseFloat(data?.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data?.name} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle heading="Update item" subHeading="Hurry Up!"></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name *</span>
            </div>
            <input
              {...register("name")}
              required
              defaultValue={name}
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
                defaultValue={category}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
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
                defaultValue={price}
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
              defaultValue={recipe}
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
            Update Menu Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
