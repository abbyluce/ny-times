import React, {useState} from "react";
import './SortForm.css'

const SortForm = ({sortArticles}) => {

const [sortBy, setSortBy] = useState("")

const handleChange = e => {
  e.preventDefault()
  setSortBy(e.target.value)
}

  return (
    <div className="sort-form">
      <select onChange={(e) => handleChange(e)}>
        <option value="default">Sort...</option>
        <option value="date">Sort By Date</option>
        <option value="alphabet">Sort Alphabetically</option>
      </select>
      <button onClick={() => sortArticles(sortBy)}>SORT</button>
    </div>
  );
};

export default SortForm;
