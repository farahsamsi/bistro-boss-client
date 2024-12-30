import { useEffect, useState } from "react";
import SectionTitle from "../SharedComponents/SectionTitle";

const ChefRecommends = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.slice(0, 3);
        setMenu(popularItems);
      });
  }, []);
  return (
    <div className="my-20">
      <SectionTitle
        subHeading="Should Try"
        heading="Chef recommends"
      ></SectionTitle>
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menu.map((item) => (
          <div key={item._id} className="card bg-black/5">
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full"
              />
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
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
