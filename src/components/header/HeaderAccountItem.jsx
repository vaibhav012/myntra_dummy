import PropTypes from "prop-types";

const HeaderAccountItem = ({ data }) => {
  return (
    <div className="text-[8px] font-bold flex justify-center items-center flex-col cursor-pointer">
      {data.icon}
      {data.name}
    </div>
  );
};

HeaderAccountItem.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default HeaderAccountItem;
