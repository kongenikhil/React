import "../UI/ExpenseItem.css";
const FilterByYear = (props) => {
  const changeYear = (event) => {
    props.setFilterYear(event.target.value);
  };
  return (
    <div className="expenses">
      <div className="new-expense__actions">
        <select
          className="new-expense__actions"
          value={props.selected}
          onChange={changeYear}
        >
          <option className="new-expense__actions" color="white" value="2022">
            2022
          </option>
          <option className="new-expense__actions" value="2021">
            2021
          </option>
          <option className="new-expense__actions" value="2020">
            2020
          </option>
          <option className="new-expense__actions" value="1996">
            1996
          </option>
          <option className="new-expense__actions" value="1997">
            1997
          </option>
        </select>
      </div>
    </div>
  );
};

export default FilterByYear;
