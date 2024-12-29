import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center px-3 mb-5 md:mb-9">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <p className="text-2xl md:text-4xl uppercase border-y-4 py-4">
        {heading}
      </p>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default SectionTitle;
