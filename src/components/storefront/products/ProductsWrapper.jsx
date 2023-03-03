import { VIEW_TYPES } from "../../../constants";
import { PRODUCT_PROPTYPE } from "../../../constants/types";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const ProductsWrapper = ({
  products,
  className = "",
  view,
  loading = false,
}) => {
  return products.length || loading ? (
    <div
      className={`bg-white col-span-4 gap-8 p-4 md:p-8 ${
        view === VIEW_TYPES.GRID
          ? "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
          : ""
      } ${className}`}
    >
      {products.map((eachProduct) => (
        <ProductCard {...eachProduct} key={eachProduct.productId} view={view} />
      ))}
    </div>
  ) : (
    <p className="text-md w-full font-bold text-center text-red-500 pt-10">
      NO PRODUCTS FOUND AS PER FILTERS
    </p>
  );
};

ProductsWrapper.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(PRODUCT_PROPTYPE)),
  className: PropTypes.string,
  view: PropTypes.oneOf(Object.values(VIEW_TYPES)),
  loading: PropTypes.bool,
};

export default ProductsWrapper;
