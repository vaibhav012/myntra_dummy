import { Fragment } from "react";
import PropTypes from "prop-types";
import { FILTER_OPTION_PROPTYPE } from "../constants/types";

const RadioInput = ({
  options: { value, label, count },
  checked = false,
  multiple = false,
  name,
  onChange,
}) => (
  <>
    <input
      type={multiple ? "checkbox" : "radio"}
      checked={checked}
      id={`${name}-${value}`}
      name={name}
      className="cursor-pointer"
      value={value}
      onChange={onChange}
    />
    <label
      htmlFor={`${name}-${value}`}
      className={`text-sm ml-2 cursor-pointer ${!multiple && "font-bold"}`}
    >
      {label}
      <span className="text-[10px] text-gray-400 ml-2">{count}</span>
    </label>
    <br />
  </>
);

RadioInput.propTypes = {
  options: FILTER_OPTION_PROPTYPE,
  checked: PropTypes.bool,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default RadioInput;
