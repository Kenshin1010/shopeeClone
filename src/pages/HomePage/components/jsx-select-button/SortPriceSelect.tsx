import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  useTheme,
} from "@mui/material";
import React from "react";

function SortPriceSelect() {
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
  const priceSearchList = ["Giá: Thấp đến cao", "Giá: Cao đến thấp"];

  function getStyles(
    price: string,
    priceDesc: readonly string[],
    theme: Theme
  ) {
    return {
      fontWeight:
        priceDesc.indexOf(price) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const theme = useTheme();
  const [priceDesc, setPriceDesc] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof priceDesc>) => {
    const {
      target: { value },
    } = event;
    setPriceDesc(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const shopeePriceSelectStyle = {
    textAlign: "left",
    cursor: "pointer",
    border: "0",
    borderRadius: "2px",
    height: "2.125rem",
    lineHeight: "2.125rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    boxSizing: "border-box",
    minWidth: "12.5rem",
    background: "#fff",
    transition: "border-color .1s ease",
    paddingLeft: ".75rem",
    boxShadow: "0 1px 1px 0 rgba(0,0,0,.02)",
  };
  return (
    <FormControl
      sx={{
        m: "1",
        // width: "300px",
        mt: "3",
      }}
    >
      <Select
        multiple
        displayEmpty
        value={priceDesc}
        onChange={handleChange}
        input={
          <OutlinedInput
            sx={{
              "&.MuiFormLabel-root": {
                lineHeigh: "1rem",
              },
            }}
          />
        }
        sx={{
          "& .MuiSelect-nativeInput": {
            position: "relative",
          },
          "& .MuiSelect-select": {
            padding: "0",
          },
          ...shopeePriceSelectStyle,
        }}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return "Giá";
          }

          return selected.join(", ");
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        {priceSearchList.map((price) => (
          <MenuItem
            key={price}
            value={price}
            style={getStyles(price, priceDesc, theme)}
          >
            {price}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    // <FormControl
    //   sx={{
    //     m: "1",
    //   }}
    //   size="small"
    // >
    //   <InputLabel
    //     id="demo-select-small-label"
    //     sx={{
    //       "&.MuiFormLabel-root": {
    //         lineHeigh: "1rem",
    //       },
    //     }}
    //   >
    //     Giá
    //   </InputLabel>
    //   <Select
    //     labelId="demo-select-small-label"
    //     id="demo-select-small"
    //     value={price}
    //     onChange={handleChange}
    //     sx={{
    //       "& .MuiSelect-nativeInput": {
    //         position: "relative",
    //       },
    //       "& .MuiSelect-select": {
    //         padding: "0",
    //       },
    //       ...shopeePriceSelectStyle,
    //     }}
    //   >
    //     <MenuItem value={"Giá: Thấp đến cao"}>Giá: Thấp đến cao</MenuItem>
    //     <MenuItem value={"Giá: Cao đến thấp"}>Giá: Cao đến thấp</MenuItem>
    //   </Select>
    // </FormControl>
  );
}

export default SortPriceSelect;
