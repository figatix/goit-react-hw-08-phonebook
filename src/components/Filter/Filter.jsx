
import React from "react";
import { setFilterState } from "redux/contacts/filterSlice";
import { StyledFilterInput, StyledFilterInputTitle, StyledFilterLabel } from "./Filter.styled";

import { useDispatch, useSelector } from "react-redux";
import { selectFilterState } from "redux/contacts/contactSelectors";
import { Button } from "@mui/material";



const Filter = () => {
  const filterState = useSelector(selectFilterState)
  const dispatch = useDispatch();

  const onChangeFilter = ({ target: { value } }) => {
    dispatch(setFilterState(value))
  }

  const onClearFilterBtn = () => {
    dispatch(setFilterState(''))
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

      <Button
        type="button"
        variant="outlined"
        color="error"
        onClick={onClearFilterBtn}
      >Clear filter</Button>

    </StyledFilterLabel>
  )
}

export { Filter };
