import React from "react";

const Pagination: React.FC = () => {
  return (
    <ul className="my-5 flex justify-start text-gray-600">
      <li>
        <a
          href="#"
          className="p-1 border border-gray-200 flex items-center 
        rounded-l-md hover:border-primary hover:text-primary hover:bg-gray-100 simple-transition"
        >
          <i className="bx bx-chevron-left bx-sm"></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="px-3 py-1 border border-gray-200 border-l-transparent flex items-center 
      hover:border-primary hover:text-primary hover:bg-gray-100 simple-transition"
        >
          1
        </a>
      </li>
      <li>
        <a
          href="#"
          className="px-3 py-1 border border-gray-200 border-l-transparent flex items-center 
      hover:border-primary hover:text-primary hover:bg-gray-100 simple-transition"
        >
          2
        </a>
      </li>
      <li>
        <a
          href="#"
          className="px-3 py-1 border border-gray-200 border-l-transparent flex items-center 
      hover:border-primary hover:text-primary hover:bg-gray-100 simple-transition"
        >
          3
        </a>
      </li>
      <li>
        <a
          href="#"
          className="px-3 py-1 border border-gray-200 border-l-transparent flex items-center 
      hover:border-primary hover:text-primary hover:bg-gray-100 simple-transition"
        >
          ...
        </a>
      </li>
      <li>
        <a
          href="#"
          className="px-3 py-1 border border-gray-200 border-l-transparent flex items-center 
      hover:border-primary hover:text-primary hover:bg-gray-100 simple-transition"
        >
          10
        </a>
      </li>
      <li>
        <a
          href="#"
          className="p-1 border border-gray-200 border-l-transparent flex items-center 
      rounded-r-md hover:border-primary hover:text-primary hover:bg-gray-100 simple-transition"
        >
          <i className="bx bx-chevron-right bx-sm"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
