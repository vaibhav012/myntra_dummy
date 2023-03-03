import { FilterAlt, FormatListBulleted, GridView } from "@mui/icons-material";
import { memo } from "react";
import { SORT_OPTIONS, VIEW_TYPES } from "../../constants";
import PropTypes from "prop-types";

const SortAndViewWrapper = ({
  onSortChange,
  toggleView,
  view,
  toggleFilter,
}) => (
  <div className="px-8 pt-4 flex justify-end gap-2">
    <span className="md:hidden">
      <FilterAlt onClick={toggleFilter} />
    </span>

    <select name="sort" onChange={onSortChange}>
      {Object.keys(SORT_OPTIONS).map((option) => (
        <option value={SORT_OPTIONS[option]} key={option}>
          {option}
        </option>
      ))}
    </select>
    {view === "GRID" ? (
      <FormatListBulleted onClick={toggleView} className="cursor-pointer" />
    ) : (
      <GridView onClick={toggleView} className="cursor-pointer" />
    )}
  </div>
);

SortAndViewWrapper.propTypes = {
  onSortChange: PropTypes.func,
  toggleView: PropTypes.func,
  toggleFilter: PropTypes.func,
  view: PropTypes.oneOf(Object.values(VIEW_TYPES)),
};

export default memo(SortAndViewWrapper);
