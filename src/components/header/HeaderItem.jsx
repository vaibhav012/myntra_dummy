import { PropTypes } from "prop-types";

const HeaderItem = ({ data }) => {
  return <div className="text-sm font-bold cursor-pointer">{data.name}</div>;
};

HeaderItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default HeaderItem;
