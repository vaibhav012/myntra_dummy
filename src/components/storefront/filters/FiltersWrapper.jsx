import { useState } from "react";
import { FILTERS } from "../../../constants";
import EachFilterWrapper from "./EachFilterWrapper";
import PropTypes from "prop-types";
import { FILTER_OPTION_PROPTYPE } from "../../../constants/types";
import { Close } from "@mui/icons-material";

const FiltersWrapper = ({
  onChange,
  className = "",
  filterOptions,
  toggleFilter,
}) => {
  const [filters, setFilters] = useState({});

  const handleEachFilterChange = (name, value) => {
    if (name === "GENDER") {
      const newFilters = { GENDER: value };
      setFilters(newFilters);
      onChange(newFilters);
      return;
    }
    const newFilters = filters ? { ...filters } : {};
    newFilters[name] = value;
    setFilters(newFilters);
    onChange(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    onChange({});
    toggleFilter?.();
  };

  return (
    <div
      className={`bg-gray-100 ${className} fixed md:static top-20 z-10 h-full overflow-scroll`}
    >
      <div className="py-4 px-6 bg-white font-bold text-sm border-b border-gray-200 flex">
        FILTERS
        <span
          className="text-red-300 cursor-pointer ml-auto"
          onClick={clearFilters}
        >
          CLEAR ALL
        </span>
        <span className="md:hidden">
          <Close className="ml-2" onClick={toggleFilter} />
        </span>
      </div>
      {FILTERS.map((eachFilter) => (
        <EachFilterWrapper
          key={eachFilter.name}
          {...eachFilter}
          options={
            eachFilter.dynamic
              ? filterOptions?.[eachFilter.name]
              : eachFilter.options
          }
          onChange={(value) => handleEachFilterChange(eachFilter.name, value)}
          filterValue={
            filters?.[eachFilter.name] || (eachFilter.multiple ? [] : "")
          }
        />
      ))}
    </div>
  );
};

FiltersWrapper.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  toggleFilter: PropTypes.func,
  filterOptions: PropTypes.objectOf(PropTypes.arrayOf(FILTER_OPTION_PROPTYPE)),
};

export default FiltersWrapper;
