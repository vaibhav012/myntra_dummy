import { Close, Search } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { FILTER_OPTION_PROPTYPE } from "../../../constants/types";
import RadioInput from "../../RadioInput";

const EachFilterWrapper = ({
  name,
  options,
  multiple,
  showTitle = true,
  onChange,
  filterValue,
}) => {
  const [search, setSearch] = useState(null);
  const searchInputRef = useRef();
  const [localOptions, setLocalOptions] = useState(options);

  useEffect(() => {
    const searchResults = search
      ? options?.filter((eachOption) =>
          eachOption.label?.toLowerCase().includes(search.toLowerCase())
        )
      : options;
    setLocalOptions(searchResults);
  }, [options, search]);

  const handleChange = (e) => {
    let newValue = multiple ? [...filterValue] : filterValue;
    if (e.target.checked) {
      multiple ? newValue.push(e.target.value) : (newValue = e.target.value);
    } else if (multiple && Array.isArray(newValue)) {
      newValue.splice(newValue.indexOf(e.target.value), 1);
    }
    onChange?.(newValue);
  };

  const toggleSearchView = () => {
    setSearch(search === null ? "" : null);
    setTimeout(() => {
      searchInputRef?.current?.focus();
    }, 0);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-6 border-gray-200 border-b border-r bg-white">
      {showTitle && (
        <div className="flex justify-between">
          {search === null && (
            <div className="text-sm font-bold mb-4">
              {name.toUpperCase()}
              <span className="text-xs text-gray-400 ml-1">
                ({localOptions?.length})
              </span>
            </div>
          )}
          {search !== null && (
            <input
              type="text"
              name="search"
              placeholder="search"
              className="mb-4"
              ref={searchInputRef}
              onChange={handleSearch}
            />
          )}
          {search === null ? (
            <Search onClick={toggleSearchView} />
          ) : (
            <Close onClick={toggleSearchView} />
          )}
        </div>
      )}
      <div className="overflow-scroll max-h-[30vh]">
        {localOptions?.map((eachOption) => (
          <RadioInput
            options={eachOption}
            key={eachOption.value}
            multiple={multiple}
            name={name}
            onChange={handleChange}
            checked={
              multiple
                ? filterValue.includes(eachOption.value)
                : filterValue === eachOption.value
            }
          />
        ))}
      </div>
    </div>
  );
};

EachFilterWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(FILTER_OPTION_PROPTYPE),
  multiple: PropTypes.bool.isRequired,
  showTitle: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default EachFilterWrapper;
