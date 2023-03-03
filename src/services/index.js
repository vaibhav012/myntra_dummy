import { ALL_FILTERS, DYNAMIC_FILTERS, SORT_OPTIONS } from "../constants";
import productsList from "../constants/products";

/**
 * Dummy Function to mimic API fetch call.
 * To be replaced with fetch once having actual API
 * @returns promise
 */
export const dummyFetchProducts = ({ filters, page, count, sort }) => {
  const filtersCopy = { ...filters };
  return new Promise((resolve) => {
    let genderFilteredList = [...productsList];
    // Filter by gender and sort as per request
    if (filtersCopy?.gender) {
      genderFilteredList = filterData(genderFilteredList, {
        gender: filtersCopy?.gender,
      });
      delete filtersCopy.gender;
    }
    genderFilteredList = sortData(genderFilteredList, sort);
    // Create filters to be shown in UI
    const dynamicFilters = createFilters(genderFilteredList);
    // Filter by other options except gender
    const filteredList = filtersCopy
      ? filterData(genderFilteredList, filtersCopy)
      : genderFilteredList;

    // Pagination
    const finalList = filteredList.slice(count * page, count * (page + 1));
    const response = {
      totalCount: filteredList.length,
      products: finalList,
      filters: dynamicFilters,
    };
    setTimeout(() => {
      resolve(response);
    }, 500);
  });
};

/**
 * Filter function to filter data as per request filters
 * @param {*} data master data
 * @param {*} filters filters as per request
 * @returns filtered data
 */
const filterData = (data, filters) => {
  if (!filters) return data;
  const filteredData = data.filter((eachData) => {
    return Object.keys(filters).every((key) => {
      switch (key) {
        case ALL_FILTERS.CATEGORY:
          return checkMultipleFilterMatch(filters[key], eachData.category);
        case ALL_FILTERS.BRAND:
          return checkMultipleFilterMatch(filters[key], eachData.brand);
        case ALL_FILTERS.PRIMARYCOLOUR:
          return checkMultipleFilterMatch(filters[key], eachData.primaryColour);
        case ALL_FILTERS.GENDER:
          if (eachData.gender.toLowerCase() !== filters[key].toLowerCase()) {
            return false;
          }
          return true;
        case ALL_FILTERS.PRICE:
          return (
            !filters[key]?.length ||
            filters[key].some((eachFilterValue) => {
              const priceValues = eachFilterValue.split("-");
              if (
                (priceValues.length === 2 && eachData.price < priceValues[0]) ||
                eachData.price >= priceValues[1]
              ) {
                return false;
              }
              return true;
            })
          );
        case ALL_FILTERS.DISCOUNT:
          const minRequiredDiscount = Math.min.apply(null, filters[key]);
          if (
            filters[key].length &&
            (eachData.discount * 100) / eachData.mrp < minRequiredDiscount
          ) {
            return false;
          }
          return true;
        default:
          return false;
      }
    });
  });
  return filteredData;
};

/**
 * Check if current value matches any of the filter value
 * @param {*} filter applied filters
 * @param {*} value value to check
 * @returns false if filters does not include value
 */
const checkMultipleFilterMatch = (filter, value) => {
  let matchAll = true;
  const filtersLowerCase = filter.map((each) => each.toLowerCase());
  if (
    filtersLowerCase.length &&
    !filtersLowerCase.includes(value.toLowerCase())
  ) {
    matchAll = false;
  }
  return matchAll;
};

/**
 * Function to sort given data as per the desired key in descending order as of now
 * can be extended to support ascending
 * @param {*} data data to sort
 * @param {*} key key to sort for
 * @returns sorted data
 */
const sortData = (data, key) => {
  if (key === SORT_OPTIONS.POPULARITY) {
    return data.sort((itemA, itemB) => {
      return itemB.rating - itemA.rating;
    });
  }
  if (key === SORT_OPTIONS.TRENDING || key === SORT_OPTIONS.RECOMMENDED) {
    return data.sort((itemA, itemB) => {
      return itemA[key] ? -1 : itemB[key] ? 1 : 0;
    });
  }
  return data;
};

/**
 * create filter options for all keys as per DYNAMIC_FILTERS constant
 * @param {*} data array of data
 * @returns object containing all filters in {[filterKey]: [options]} format
 */
const createFilters = (data) => {
  const filters = {};
  DYNAMIC_FILTERS.forEach((eachFilter) => {
    filters[eachFilter] = formOptions(data, eachFilter);
  });
  return filters;
};

/**
 * Function to find all unique filter options for a particular key in a data set
 * Sorts the filter options as per count of desired results
 * @param {*} data - array of data
 * @param {*} key - key for which filter options to be generated
 * @returns array of filter options with count
 */
const formOptions = (data, key) => {
  const unique = {};
  data.forEach((eachData) => {
    if (unique[eachData[key]]) {
      unique[eachData[key]] = unique[eachData[key]] + 1;
    } else {
      unique[eachData[key]] = 1;
    }
  });
  const sorted = Object.entries(unique).sort((a, b) => b[1] - a[1]);
  return sorted.map((eachUniqueKey) => ({
    label: eachUniqueKey[0],
    count: eachUniqueKey[1],
    value: eachUniqueKey[0],
  }));
};
