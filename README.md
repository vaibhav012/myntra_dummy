# Myntra Storefront Page Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Playground

http://myntra-dummy.s3-website.ap-south-1.amazonaws.com/

## How to run?

#### `yarn install --frozen-lockfile`

to install modules from lockfile

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

OR

#### `yarn serve`

Runs the previous build (included in the zip).\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### **Check console for API request and response logs**

<br/>

## Architecture Design

#### `services/index.js`

Contains all dummy server logic.

1. Dummy API Call
2. Sort & Filter
3. Generate Dynamic FIlter
4. Chunk data as per page number

#### `contants/index.js`

Contains all required constants

#### Component Structure

- Storefront
  - Header
  - StorefrontHeader
  - SortAndViewWrapper
  - FiltersWrapper
    - EachFilterWrapper
      - RadioInput
  - ProductsWrapper
    - ProductCard

#### Tailwind used for className based configurable styling

<br/>

## Functionalities Implemeted

- Filter
  1. Static filters (GENDER, PRICE, DISCOUNT)
  2. Dynamic filters (CATEGORY, BRAND, PRIMARY COLOUR)
  3. Search within long list of filters
- Sort as per [Popularity | Trending | Recommended]
- Grid View and List View
- Pagination
