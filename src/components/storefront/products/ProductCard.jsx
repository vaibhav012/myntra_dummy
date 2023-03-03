import { FavoriteBorder, Star } from "@mui/icons-material";
import { VIEW_TYPES } from "../../../constants";
import { PRODUCT_PROPTYPE } from "../../../constants/types";
import PropTypes from "prop-types";

const ProductCard = ({
  product,
  images,
  brand,
  discountDisplayLabel,
  mrp,
  price,
  sizes,
  view,
  rating,
  ratingCount,
}) => {
  const listView = view === VIEW_TYPES.LIST;
  return (
    <div
      className={`w-full group hover:shadow-md ${
        listView ? "flex mb-4" : "pb-20 relative"
      }`}
    >
      <img
        src={images[0]?.src}
        className={`object-contain ${
          listView ? "w-[15vh] mr-4" : "min-h-[35vh]"
        }`}
        alt={product}
      />
      <div
        className={`bottom-0 w-full ${
          listView
            ? "flex flex-col justify-around w-[calc(100%-15vh-1rem)]"
            : "absolute"
        }`}
      >
        {!!rating && (
          <span
            className={`bg-white bg-opacity-70 rounded w-fit text-xs  flex items-center ${
              listView ? "" : "ml-2 px-2 mb-2 block group-hover:hidden"
            }`}
          >
            {Math.round(rating, 2)}
            <Star fontSize="inherit" color="success" /> | {ratingCount}
          </span>
        )}
        <div className={`${listView ? "" : "bg-white p-2"}`}>
          <span
            className={`truncate text-xs mt-2 font-bold block ${
              listView ? "" : "group-hover:hidden"
            }`}
          >
            {brand}
          </span>
          <span
            className={`truncate text-xs mt-1 block ${
              listView ? "" : "group-hover:hidden"
            }`}
          >
            {product}
          </span>

          {listView ? (
            <FavoriteBorder className="cursor-pointer" />
          ) : (
            <button
              className={`text-sm border border-gray-800 px-2 py-1 w-full hidden group-hover:block bg-white`}
            >
              WISHLIST
            </button>
          )}
          <span
            className={`truncate text-xs mt-2 ${
              listView ? "block" : "hidden group-hover:block"
            }`}
          >
            Sizes: {sizes}
          </span>
          <div className="flex mt-2 text-xs items-baseline">
            <span className="font-bold">Rs.{price}</span>
            <span className="text-[10px] ml-2 line-through">Rs.{mrp}</span>
            <span className="text-[10px] ml-2 text-yellow-500">
              {discountDisplayLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  ...PRODUCT_PROPTYPE,
  view: PropTypes.oneOf(Object.values(VIEW_TYPES)),
};

export default ProductCard;
