import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const shopeeTabNavText = {
    color: "#333",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    textTransform: "unset",
    "&.Mui-selected": {
      color: "#ee4d2d",
      fontWeight: "500",
    },
    "&:hover": {
      color: "#ee4d2d",
    },
  };

  return (
    <Box
      sx={{
        position: "static",
        // position: "fixed",
        top: "72px",
        zIndex: "1000",
        width: "100%",
        borderRadius: "6px",
        marginBottom: "16px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        sx={{
          display: "flex",
          overflow: "hidden",
          position: "relative",
          whiteSpace: "nowrap",
          width: "calc((100vw - 2* 67px) / 24* 18)",
          minWidth: "924px",
          maxWidth: "1339.5px",
          height: "56px",
          background: "#fff",
          boxShadow: "0 2px 6px 0 #e5e5e5",
          "& .MuiTabs-indicator": {
            height: "3px",
            left: "0",
            // transition: "transform .2s ease-in-out, width .2s ease-in-out",
            backgroundColor: "#ee4d2d",
            position: "absolute",
          },
        }}
      >
        <Tab
          value="one"
          label="Thông tin cơ bản"
          wrapped
          sx={{ ...shopeeTabNavText }}
        />
        <Tab
          value="two"
          label="Thông tin bán hàng"
          sx={{ ...shopeeTabNavText }}
        />
        <Tab value="three" label="Vận chuyển" sx={{ ...shopeeTabNavText }} />
        <Tab value="four" label="Thông tin khác" sx={{ ...shopeeTabNavText }} />
      </Tabs>
    </Box>
  );
}
