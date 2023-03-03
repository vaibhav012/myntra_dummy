import Pagination from "../Pagination";
import { useCallback, useEffect, useState } from "react";
import {
  VIEW_TYPES,
  SORT_OPTIONS,
  PRODUCTS_PER_PAGE,
  MOBILE_WINDOW_SIZE,
} from "../../constants";
import { dummyFetchProducts } from "../../services";
import Header from "../header/Header";
import FiltersWrapper from "./filters/FiltersWrapper";
import ProductsWrapper from "./products/ProductsWrapper";
import StorefrontHeader from "./StorefrontHeader";
import SortAndViewWrapper from "./SortAndViewWrapper";
import useWindowSize from "../hooks/useWindowSize";

const Storefront = () => {
  const [data, setData] = useState({ products: [] });
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(SORT_OPTIONS.RECOMMENDED);
  const [view, setView] = useState(VIEW_TYPES.GRID);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const windowSize = useWindowSize();

  const fetchProducts = useCallback(() => {
    setLoading(true);
    const request = {
      count: PRODUCTS_PER_PAGE,
      page: page,
      filters: filters,
      sort: sort,
    };
    console.log("Request: ", request);
    dummyFetchProducts(request).then((fetchResult) => {
      console.log("Response: ", fetchResult);
      setData(fetchResult);
      setLoading(false);
    });
  }, [page, filters, sort]);

  useEffect(() => {
    setPage(0);
  }, [filters]);

  useEffect(() => {
    if (windowSize.width < MOBILE_WINDOW_SIZE) {
      setShowFilter(false);
      return;
    }
    setShowFilter(true);
  }, [windowSize]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const toggleView = () => {
    setView(view === VIEW_TYPES.GRID ? VIEW_TYPES.LIST : VIEW_TYPES.GRID);
  };

  const toggleFilter = () => {
    windowSize.width < MOBILE_WINDOW_SIZE && setShowFilter(!showFilter);
  };

  const handlePageChange = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const totalPages = Math.floor(data.totalCount / PRODUCTS_PER_PAGE);

  return (
    <>
      <Header />
      <StorefrontHeader
        pageName="Myntra Fashion Store"
        pageParents={["Home", "Clothing"]}
        totalProducts={data.totalCount}
      />
      <div className="flex">
        {showFilter && (
          <FiltersWrapper
            onChange={setFilters}
            className="w-full md:w-2/6 lg:w-1/6 flex-grow"
            filterOptions={data.filters}
            toggleFilter={toggleFilter}
          />
        )}
        <div className="w-full md:w-4/6 lg:w-5/6 relative">
          {loading && (
            <div className="loader absolute translate-x-1/2 translate-y-1/2 z-10 top-[50vh] left-1/2"></div>
          )}
          <SortAndViewWrapper
            onSortChange={handleSortChange}
            view={view}
            toggleView={toggleView}
            toggleFilter={toggleFilter}
          />
          <ProductsWrapper
            products={data.products}
            view={view}
            loading={loading}
          />
          {totalPages > 0 && (
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              onChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Storefront;
