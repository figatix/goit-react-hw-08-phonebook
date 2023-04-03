
import React from "react";
import { setFilterState } from "redux/contacts/filterSlice";
// import { StyledFilterInput, StyledFilterInputTitle, StyledFilterLabel } from "./Filter.styled";
import { StyledFilterContainer } from "./Filter.styled";

import { useDispatch, useSelector } from "react-redux";
import { selectFilterState } from "redux/contacts/contactSelectors";
import { Button, InputAdornment } from "@mui/material";



// ***
import { Field } from "./Filter.styled";
import SearchIcon from '@mui/icons-material/Search';
// ***


export const Filter = () => {
  const filterState = useSelector(selectFilterState)
  const dispatch = useDispatch();

  const onChangeFilter = ({ target: { value } }) => {
    dispatch(setFilterState(value))
  }

  const onClearFilterBtn = () => {
    dispatch(setFilterState(''))
  }

  return (
    <>
      {/* <StyledFilterLabel>
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

      </StyledFilterLabel> */}

      <StyledFilterContainer>
        <Field
          id="filter"
          label="Find contacts by name"
          variant="standard"
          size="small"
          onChange={onChangeFilter}
          value={filterState}
          color="secondary"
          sx={{
            mb: '8px'
          }}

          InputProps={{
            endAdornment: <InputAdornment position="end">
              <SearchIcon color="secondary" />
            </InputAdornment>,
          }}
        />

        <Button
          type="button"
          variant="outlined"
          color="error"
          onClick={onClearFilterBtn}
        >Clear filter</Button>
      </StyledFilterContainer>

    </>
  )
}






