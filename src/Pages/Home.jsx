import Banner from "../Components/Banner";
import Category from "../Components/Category";
import ChefRecommends from "../Components/ChefRecommends";
import Featured from "../Components/Featured";
import PopularMenu from "../Components/PopularMenu";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>

      {/* some random banner */}
      <div className="hero min-h-[calc(100vh-200px)] bg-homeBg bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center mb-16 md:mb-28">
        <div className="w-11/12 md:w-8/12 bg-white text-center py-11 md:py-24 px-8 md:px-14">
          <h1 className="text-2xl md:text-4xl mb-3">Bistro Boss</h1>
          <p>
            Monotonectally evisculate team driven resources vis-a-vis
            next-generation markets. Proactively disintermediate user-centric
            core competencies via cost effective growth strategies.
          </p>
        </div>
      </div>

      {/* Popular menu */}
      <PopularMenu></PopularMenu>

      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
