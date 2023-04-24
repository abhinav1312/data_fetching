import React from "react";
import QueryList from "./query.js";


const SearchFilter = ({ query, dropdown, setDropdown, handleBtnClick }) => {


  return (
    <div className="max-w-5xl mx-auto py-4">
      <h2 className="text-2xl pb-1">Search the queries</h2>
      <div
        className="p-2 py-6 border outline-0"
        placeholder="Search for a query"
        onClick={() => setDropdown(!dropdown)}
      >
        {query}
      </div>
      {dropdown && (
        <div className="px-4 flex flex-col items-start justify-start bg-gray-300 absolute top-30">
          {QueryList.map((query, id) => {
            return (
              <button
                key={id}
                onClick={handleBtnClick}
                className="p-2 text-xl w-full px-0 text-justify border-b-2 hover:bg-gray-400 transition-all"
                name={query.btnValue}
              >
                {query.htmlValue}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
