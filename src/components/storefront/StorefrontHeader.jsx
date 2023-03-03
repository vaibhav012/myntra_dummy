import { memo } from "react";
import PropTypes from "prop-types";

const StorefrontHeader = ({ pageParents, pageName, totalProducts }) => {
  const pageNameDisplay = (
    <span className="font-bold text-black">{pageName}</span>
  );

  return (
    <div className="col-span-full p-4 md:p-6">
      <span className="text-sm block">
        {pageParents.map((eachParent, index) => (
          <span className="cursor-pointer" key={index}>
            {eachParent} /{" "}
          </span>
        ))}{" "}
        {pageNameDisplay}
      </span>
      <span className="text-md mt-4 block text-gray-500">
        {pageNameDisplay} - {totalProducts || 0} Items
      </span>
    </div>
  );
};

StorefrontHeader.propTypes = {
  pageParents: PropTypes.arrayOf(PropTypes.string),
  pageName: PropTypes.string.isRequired,
  totalProducts: PropTypes.number,
};

export default memo(StorefrontHeader);
