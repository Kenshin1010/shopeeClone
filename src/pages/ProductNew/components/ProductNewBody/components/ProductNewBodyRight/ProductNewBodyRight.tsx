import { Box, Paper } from "@mui/material";
import NavTabPanel from "./components/NavTabPanel";
import ButtonGroupBottom from "./components/ButtonGroupBottom";
import BasicInformation from "./components/BasicInformation";
import CheckBoxIcon from "../../../../../../assets/jsx-icon/CheckBoxIcon";

function ProductNewBodyRight() {
  return (
    <div className="ProductNewBodyRight">
      <Paper>
        <NavTabPanel />
      </Paper>
      <Paper>
        <section className="product-edit__section">
          <BasicInformation />
        </section>
      </Paper>
      <Paper>
        <section className="product-edit__section">
          <Box className="product-detail-panel product-sales-info inactive">
            <Box className="panel-header">
              <Box className="panel-title">Thông tin bán hàng</Box>
            </Box>
            <Box className="panel-content-wrapper">
              <Box className="panel-inactive-content">
                Có thể điều chỉnh sau khi chọn ngành hàng
              </Box>
            </Box>
          </Box>
        </section>
      </Paper>
      <Paper>
        <section className="product-edit__section">
          <Box className="product-detail-panel product-sales-info inactive">
            <Box className="panel-header">
              <Box className="panel-title">Vận chuyển</Box>
            </Box>
            <Box className="panel-content-wrapper">
              <Box className="panel-inactive-content">
                Có thể điều chỉnh sau khi chọn ngành hàng
              </Box>
            </Box>
          </Box>
        </section>
      </Paper>
      <Paper>
        <section className="product-edit__section">
          <Box className="product-detail-panel product-sales-info inactive">
            <Box className="panel-header">
              <Box className="panel-title">Thông tin khác</Box>
            </Box>
            <Box className="panel-content-wrapper">
              <Box className="panel-inactive-content">
                Có thể điều chỉnh sau khi chọn ngành hàng
              </Box>
            </Box>
          </Box>
        </section>
      </Paper>
      <Paper>
        <ButtonGroupBottom />
      </Paper>

      <Paper>
        <CheckBoxIcon />
      </Paper>
    </div>
  );
}

export default ProductNewBodyRight;
