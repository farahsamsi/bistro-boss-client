import SectionTitle from "../SharedComponents/SectionTitle";
import featuredImg from "../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section className="hero bg-featuredBg bg-center bg-no-repeat bg-cover bg-fixed text-white ">
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content block py-12">
        <SectionTitle
          heading="Featured Item"
          subHeading="check it out"
        ></SectionTitle>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center md:pb-20 pt-10 md:px-36 ">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2020</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Holisticly visualize ethical products after timely e-tailers.
              Progressively underwhelm bleeding-edge vortals for ethical
              experiences. Enthusiastically exploit robust sources via an
              expanded array of best practices. Assertively disseminate
              cross-unit niches before go forward communities. Phosfluorescently
              initiate technically sound growth strategies before integrated
              infrastructures.
            </p>
            <button className="px-4 py-2 border-b rounded-lg mt-4 text-white uppercase font-bold hover:cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
