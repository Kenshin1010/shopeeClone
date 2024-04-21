import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  useTheme,
} from "@mui/material";
import React, { useMemo } from "react";

function ShopeeSearchbarSelectorTrigger() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const optionsSearchList = ["Trong Nhà Sách Online", "Trong Shopee"];

  function getStyles(
    option: string,
    optionDesc: readonly string[],
    theme: Theme
  ) {
    return {
      fontWeight:
        optionDesc.indexOf(option) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const theme = useTheme();
  const [optionDesc, setOptionDesc] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof optionDesc>) => {
    const {
      target: { value },
    } = event;
    setOptionDesc(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const shopeeSearchbarSelectorTriggerStyles = useMemo(
    () => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      borderLeft: "1px solid rgba(0, 0, 0, .09)",
      boxSizing: "border-box",
      height: "75%",
      lineHeight: "1.25rem",
      // overflow: "hidden",
      paddingLeft: ".9375rem",
      paddingRight: ".625rem",
      // textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "150px",
      cursor: "pointer",
      "& .MuiInputBase-root": {
        padding: "0",
      },
      "& .MuiOutlinedInput-root": {
        padding: "0",
      },
      "& .css-84nhb1-MuiAutocomplete-root .MuiOutlinedInput-root": {
        padding: "0",
      },
    }),
    []
  );

  const getInputStyles = useMemo(
    () => ({
      positions: "relative",
      backgroundColor: "#fff",
      border: "none",
      borderBlockColor: "none",
      outline: "none",
      maxHeight: "40px",
      padding: 0,
      flex: "1",
      // padding: "0 .625rem",
      "& .MuiInputBase-input": {
        padding: ".75rem",
        lineHeight: "20px",
        border: "none",
        borderBlockColor: "none",
        outline: "none",
      },
      "& .MuiInputBase-input:focus": { outline: "none" },
      fontSize: ".875rem",
      borderRadius: "2px",
      boxShadows: "inset 0 2px 0 rgba(0, 0, 0, .02)",
      boxSizing: "border-box",
      // overflow: "hidden",
      cursor: "text",
      "& .MuiInputBase-root": {
        height: "40px",
        borderRadius: "2px",
        border: "none",
        borderBlockColor: "none",
        outline: "none",
      },
      "& .MuiOutlinedInput-root": { lineHeight: "20px", fontSize: ".875rem" },
      "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
          borderColor: "rgba(0, 0, 0, 0.87)",
          borderWidth: "1px",
        },

      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: "1px solid #fff",
        borderBlockColor: "none",
        outline: "none",
      },

      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline:focus": {
        border: "1px solid rgba(0, 0, 0, 0.87)",
      },
    }),
    []
  );

  const optionSelectMenuItemStyles = useMemo(
    () => ({
      fontWeight: "normal",
      display: "block",
      minHeight: "1.2em",
      padding: "0px 2px 1px",
      whiteSpace: "nowrap",
      "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: "1px",
        },
    }),
    []
  );
  return (
    <FormControl
      sx={{
        m: "1",
        // width: "300px",
        mt: "3",
        ...shopeeSearchbarSelectorTriggerStyles,
      }}
    >
      <Select
        multiple
        displayEmpty
        value={optionDesc}
        onChange={handleChange}
        input={
          <OutlinedInput
            sx={{
              pointerEvents: "none",
              textTransform: "none",
              font: "inherit",
              color: "#000",
              ...getInputStyles,
              ...optionSelectMenuItemStyles,
            }}
          />
        }
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Trong Nhà Sách Online</em>;
          }

          return selected.join(", ");
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <em>Trong Nhà Sách Online</em>
        </MenuItem>
        {optionsSearchList.map((option) => (
          <MenuItem
            key={option}
            value={option}
            style={getStyles(option, optionDesc, theme)}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    // <Autocomplete
    //   disablePortal
    //   id="combo-box-demo"
    //   options={optionsSearchList}
    //   sx={{
    //     ...shopeeSearchbarSelectorTriggerStyles,
    //   }}
    //   renderInput={(params) => (
    //     <TextField
    //       {...params}
    //       placeholder="Trong Nhà Sách Online"
    //       sx={{
    //         pointerEvents: "none",
    //         textTransform: "none",
    //         font: "inherit",
    //         color: "#000",
    //         ...getInputStyles,
    //         ...optionSelectMenuItemStyles,
    //       }}
    //       InputProps={{
    //         ...params.InputProps,
    //         endAdornment: (
    //           <InputAdornment position="end">
    //             <ArrowDownIcon />
    //           </InputAdornment>
    //         ),
    //       }}
    //     />
    //   )}
    // />
  );
}

export default ShopeeSearchbarSelectorTrigger;
