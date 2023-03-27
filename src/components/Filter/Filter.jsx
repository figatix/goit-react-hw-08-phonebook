
import React from "react";
import { setFilterState } from "redux/contacts/filterSlice";
import { StyledFilterInput, StyledFilterInputTitle, StyledFilterLabel } from "./Filter.styled";

import { useDispatch, useSelector } from "react-redux";
import { selectFilterState } from "redux/contacts/contactSelectors";



const Filter = () => {
  const filterState = useSelector(selectFilterState)
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
