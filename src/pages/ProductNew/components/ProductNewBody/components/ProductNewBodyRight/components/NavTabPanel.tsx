import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value="one" label="Thông tin cơ bản" wrapped />
        <Tab value="two" label="Thông tin bán hàng" />
        <Tab value="three" label="Vận chuyển" />
        <Tab value="four" label="Thông tin khác" />
      </Tabs>
    </Box>
  );
}
