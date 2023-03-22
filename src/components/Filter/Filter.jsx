
import React from "react";
import { getFilterState, setFilterState } from "redux/filterSlice";
import { StyledFilterInput, StyledFilterInputTitle, StyledFilterLabel } from "./Filter.styled";

import { useDispatch, useSelector } from "react-redux";



const Filter = () => {
  const filterState = useSelector(getFilterState)
  const dispatch = useDispatch();

  const onChangeFilter = ({ target: { value } }) => {
    dispatch(setFilterState(value))
  }

  return (
    <StyledFilterLabel>
      <StyledFilterInputTitle>Find contacts by name</StyledFilterInputTitle>
      <StyledFilterInput
        name="filter"
        value={filterState}
        onChange={onChangeFilter}
        type="text"
      />
    </StyledFilterLabel>
  )
}

export { Filter };
