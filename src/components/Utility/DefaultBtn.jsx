import React from "react";

const DefaultBtn = ({
  func,
  name,
  cuStyle,
  loading,
  txtColor,
  HoverColor,
  disabled,
}) => {
  return (
    <button
      type="submit"
      disabled={loading}
      onClick={func}
      className={` ${cuStyle} ${txtColor} ${HoverColor} ${disabled} group px-8 py-4 text-lg font-semibold rounded-full shadow-md 
    transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 
    `}
    >
      {loading ? "loaing..." : name}
      <span className="inline-block pl-2 transform transition-transform duration-300 group-hover:-rotate-45">
        →
      </span>
    </button>
  );
};

export default DefaultBtn;
