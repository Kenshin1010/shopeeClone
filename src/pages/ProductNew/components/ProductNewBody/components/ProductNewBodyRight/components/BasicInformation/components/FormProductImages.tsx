import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

function FormProductImages() {
  const editLabel = {
    position: "relative",
    minHeight: "40px",
    textAlign: "right",
    color: "#333",
    flexBasis: "144px",
    width: "144px",
    maxWidth: "144px",
    marginRight: "16px",
  };

  const mandatory = {
    color: "#ee4d2d",
    display: "inline-block",
    fontSize: "14px",
  };

  const mandatoryIcon = {
    marginRight: "3px",
    verticalAlign: "middle",
  };
  return (
    <div className="FormProductImages">
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <FormLabel id="demo-row-radio-buttons-group-label">
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            sx={{ ...editLabel }}
            className="edit-label edit-title"
          >
            <Box className="mandatory" sx={{ ...mandatory }}>
              <Typography className="mandatory-icon" sx={{ ...mandatoryIcon }}>
                *
              </Typography>
            </Box>
            <Typography>Hình ảnh sản phẩm</Typography>
          </Stack>
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="Hình ảnh tỷ lệ 1:1"
            control={<Radio />}
            label="Hình ảnh tỷ lệ 1:1"
          />
          <FormControlLabel
            value="Hình ảnh tỷ lệ 3:4"
            control={<Radio />}
            label="Hình ảnh tỷ lệ 3:4"
          />
          <Button
            type="button"
            className="shopee-button shopee-button--link shopee-button--normal"
            sx={{ marginLeft: "16px" }}
          >
            <Typography> View Example </Typography>
          </Button>
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default FormProductImages;
