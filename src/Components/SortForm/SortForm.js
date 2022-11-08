import React from "react";
import './SortForm.css'

const SortForm = () => {
  return (
    <div className="sort-form">
      <select>
        <option value="default">Sort...</option>
        <option value="date">Sort By Date</option>
        <option value="alphabet">Sort Alphabetically</option>
      </select>
    </div>
  );
};

export default SortForm;
