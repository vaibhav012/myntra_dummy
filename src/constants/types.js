import PropTypes from "prop-types";

export const FILTER_OPTION_PROPTYPE = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

export const PRODUCT_PROPTYPE = {
  product: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string })),
  brand: PropTypes.string.isRequired,
  discountDisplayLabel: PropTypes.string.isRequired,
  mrp: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.string.isRequired,
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
};
