import PropTypes from "prop-types";

const Cover = ({ img, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
      }}
      className="hero min-h-[calc(100vh-200px)] bg-no-repeat bg-cover bg-center bg-fixed   mb-10 md:mb-20"
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="w-11/12 md:w-8/12 text-white text-center py-11 md:py-24 px-8 md:px-14 bg-black bg-opacity-60">
        <h1 className="text-2xl md:text-4xl mb-3 uppercase">{title}</h1>
        <p>
          Monotonectally evisculate team driven resources vis-a-vis
          next-generation markets. Proactively disintermediate user-centric core
          competencies via cost effective growth strategies.
        </p>
      </div>
    </div>
  );
};

Cover.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default Cover;
