import {
  Autocomplete,
  Box,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";

import CheckBoxIcon from "../../assets/jsx-icon/CheckBoxIcon";
import CheckedIcon from "../../assets/jsx-icon/CheckedIcon";
import color from "../../theme/Colors";

const icon = <CheckBoxIcon />;
const checkedIcon = <CheckedIcon />;

type Props<T> = {
  listData: T[];
  label: string | JSX.Element;
  value: any[] | any;
  keyLabel: keyof T;
  keyId: keyof T;
  setFilter: (option: T[]) => void;
  isDisable?: boolean;
  limitTags?: number;
  chipSize?: number;
  placeHolder?: string;
};

export default function CheckBox<T>(props: Props<T>) {
  const handleInput = (e: any, value: T[]) => {
    console.log(e);
    props.setFilter(value);
  };

  return (
    <Box
      sx={{
        "& ul": {
          padding: "5px !important",
          borderBottom: `1px solid ${color.grey100}`,
        },
        "& svg": {
          width: "15px !important",
          height: "15px !important",
        },
        "& .MuiButtonBase-root": {
          backgroundColor: color.grey200,
          maxWidth: `${props.chipSize || 120}px !important`,
        },
      }}
    >
      <Autocomplete
        multiple
        id="checkboxes-tags-demo1"
        options={props.listData}
        sx={{
          "& .MuiOutlinedInput-root > span.MuiAutocomplete-tagSizeSmall": {
            px: "5px",
            background: color.grey200,
            borderRadius: "5px",
            fontSize: "12px",
          },
        }}
        disabled={props.isDisable || false}
        componentsProps={{
          popper: {
            sx: {
              zIndex: (theme) => theme.zIndex.drawer - 1,
              "& .MuiAutocomplete-listbox": {
                padding: "5px",
              },
              "& li": {
                minHeight: "auto",
              },
            },
          },
        }}
        limitTags={props.limitTags ?? 2}
        disableCloseOnSelect
        noOptionsText={"No options"}
        // open
        size="small"
        getOptionLabel={(option) => option[props.keyLabel]}
        onChange={(event, value) => handleInput(event, value)}
        isOptionEqualToValue={(option, value) =>
          option[props.keyId] === value[props.keyId]
        }
        value={props.value || null}
        renderOption={(props1, option, { selected }) => {
          return (
            <li
              {...props1}
              style={{
                borderRadius: "4px",
                marginBottom: "2px",
                paddingRight: "10px",
              }}
              key={Number(option[props.keyId])}
            >
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8, padding: 0 }}
                checked={selected}
              />
              <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                {option[props.keyLabel]} (ZoneID {option[props.keyId]})
              </Typography>
            </li>
          );
        }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              InputLabelProps={{
                shrink: true,
              }}
              label={props.label}
              placeholder={props.placeHolder ?? "Select more"}
              sx={{}}
            />
          );
        }}
      />
    </Box>
  );
}
